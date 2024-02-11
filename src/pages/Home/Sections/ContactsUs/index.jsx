import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import check from 'assets/icons/check--green.svg';
import Button from 'components/Button';
import Container from 'components/Container';
import Input from 'components/Input';
import LinkButton from 'components/LinkButton';
import Textarea from 'components/TextArea';
import { apiKey } from 'constants';
import { z } from 'zod';

import {
  ButtonWrapper,
  ContactsUsContent,
  Form,
  InputWrapper,
  SectionContactsUs,
  SuccessMessage,
  Tittle,
} from './styles';

const contactFields = {
  name: 'name',
  email: 'email',
  message: 'message',
};

const schema = z.object({
  [contactFields.name]: z.string().min(1, { message: 'name is required' }),
  [contactFields.email]: z.string().email(),
  [contactFields.message]: z
    .string()
    .min(1, { message: 'Message is required' }),
});

const ContactsUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    defaultValues: {
      [contactFields.name]: '',
      [contactFields.email]: '',
      [contactFields.message]: '',
    },
    resolver: zodResolver(schema),
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      await fetch(apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <SectionContactsUs>
      <Container className="contacts-us__container">
        <Tittle>Kontaktieren Sie uns!</Tittle>
        <ContactsUsContent>
          {isSubmitSuccessful ? (
            <SuccessMessage>
              <img src={check} alt="Success" />
              <span>
                Deine Nachricht wurde erfolgreich an das FOXI Team geschickt!
              </span>
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputWrapper>
                <Input
                  type="text"
                  {...register(contactFields.name)}
                  placeholder="Name eingeben"
                  error={errors.name?.message}
                  disabled={isSubmitting}
                />

                <Input
                  {...register(contactFields.email)}
                  type="email"
                  placeholder="Email-Adresse eingeben"
                  error={errors.email?.message}
                  disabled={isSubmitting}
                />
              </InputWrapper>
              <Textarea
                {...register(contactFields.message, { required: true })}
                placeholder="Ihre Nachricht"
                error={errors.message?.message}
                disabled={isSubmitting}
              />
              <ButtonWrapper>
                <Button type="submit" blue>
                  abschicken
                </Button>
                <div>oder</div>
                <LinkButton
                  blue
                  href="https://calendly.com/foxi-abrechnung/30min?month=2024-02"
                  target="_blank"
                >
                  Termin vereinbaren
                </LinkButton>
              </ButtonWrapper>
            </Form>
          )}
        </ContactsUsContent>
      </Container>
    </SectionContactsUs>
  );
};

export default ContactsUs;
