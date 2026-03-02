"use client";

import { useMemo, useState } from "react";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim().length < 3) {
    errors.subject = "Subject should be at least 3 characters.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Message should be at least 20 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  const errors = useMemo(() => validate(values), [values]);
  const isValid = Object.keys(errors).length === 0;

  function onChange(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setIsSubmitted(false);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasAttemptedSubmit(true);

    if (!isValid) {
      return;
    }

    setIsSubmitted(true);
    setValues(initialValues);
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-4" aria-describedby="contact-form-hint">
      <p id="contact-form-hint" className="text-sm text-zinc-600">
        This is a frontend-only form for now. Your message is validated in the browser.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-zinc-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            value={values.name}
            onChange={(event) => onChange("name", event.target.value)}
            className="form-input"
            aria-invalid={Boolean(hasAttemptedSubmit && errors.name)}
            aria-describedby={hasAttemptedSubmit && errors.name ? "name-error" : undefined}
          />
          {hasAttemptedSubmit && errors.name ? (
            <p id="name-error" role="alert" className="text-sm text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => onChange("email", event.target.value)}
            className="form-input"
            aria-invalid={Boolean(hasAttemptedSubmit && errors.email)}
            aria-describedby={hasAttemptedSubmit && errors.email ? "email-error" : undefined}
          />
          {hasAttemptedSubmit && errors.email ? (
            <p id="email-error" role="alert" className="text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-zinc-800">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          autoComplete="off"
          required
          minLength={3}
          value={values.subject}
          onChange={(event) => onChange("subject", event.target.value)}
          className="form-input"
          aria-invalid={Boolean(hasAttemptedSubmit && errors.subject)}
          aria-describedby={hasAttemptedSubmit && errors.subject ? "subject-error" : undefined}
        />
        {hasAttemptedSubmit && errors.subject ? (
          <p id="subject-error" role="alert" className="text-sm text-red-600">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-zinc-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={20}
          value={values.message}
          onChange={(event) => onChange("message", event.target.value)}
          className="form-input resize-y"
          aria-invalid={Boolean(hasAttemptedSubmit && errors.message)}
          aria-describedby={hasAttemptedSubmit && errors.message ? "message-error" : undefined}
        />
        {hasAttemptedSubmit && errors.message ? (
          <p id="message-error" role="alert" className="text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="focus-ring ui-transition inline-flex rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-600"
      >
        Send message
      </button>

      <p aria-live="polite" role="status" className="min-h-5 text-sm text-emerald-700">
        {isSubmitted ? "Thanks! Your message passed validation and is ready to be sent." : ""}
      </p>
    </form>
  );
}
