package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ses"
)

type RequestBody struct {
	Email   string `json:"email"`
	Name    string `json:"name"`
	Message string `json:"message"`
}

func handler(ctx context.Context, event events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// Parse the request body
	var requestBody RequestBody
	err := json.Unmarshal([]byte(event.Body), &requestBody)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: 400,
			Body:       "Invalid request body",
		}, err
	}

	// Extract input parameters from the parsed request body
	email := requestBody.Email
	name := requestBody.Name
	message := requestBody.Message

	// Create a new AWS session
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String("eu-central-1"), // Replace with your AWS region
	})
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       "Error creating AWS session",
		}, err
	}

	// Create an SES client
	svc := ses.New(sess)

	// Compose the email message
	subject := fmt.Sprintf("Kontaktform von %s", name)
	body := fmt.Sprintf("Name: %s\nEmail: %s\nNachricht: %s", name, email, message)

	// Create an SES SendEmailInput
	input := &ses.SendEmailInput{
		Destination: &ses.Destination{
			ToAddresses: []*string{aws.String("info@foxi-abrechnung.de")},
		},
		Message: &ses.Message{
			Body: &ses.Body{
				Text: &ses.Content{
					Data: aws.String(body),
				},
			},
			Subject: &ses.Content{
				Data: aws.String(subject),
			},
		},
		Source: aws.String("info@foxi-abrechnung.de"),
	}

	// Send the email using the SES client
	_, err = svc.SendEmail(input)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       fmt.Sprintf("Error sending email: %s", err.Error()),
		}, err
	}

	responseBody := map[string]string{"message": "Email sent successfully"}
	responseJSON, _ := json.Marshal(responseBody)

	return events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers: map[string]string{
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Origin":  "*", // Change to your domain
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET,ANY",
		},
		Body: string(responseJSON),
	}, nil
}

func main() {
	lambda.Start(handler)
}
