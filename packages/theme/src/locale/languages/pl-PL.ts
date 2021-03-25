import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'pl-PL',
  exception: {
    403: `Niestety, nie masz uprawnień do tej strony`,
    404: `Niestety, ta strona nie istnieje`,
    500: `Niestety, błąd serwera`,
    backToHome: 'Powróć do strony głównej',
  },
  noticeIcon: {
    emptyText: 'Brak danych',
    clearText: 'Wyczyść',
  },
  reuseTab: {
    close: 'Zamknij kartę',
    closeOther: 'Zamknij inne karty',
    closeRight: 'Zamknij karty po prawej',
    refresh: 'Refresh',
  },
  tagSelect: {
    expand: 'Rozszerz',
    collapse: 'Zmniejsz',
  },
  miniProgress: {
    target: 'Cel: ',
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} z {{total}}',
    filterConfirm: 'OK',
    filterReset: 'Wyczyść',
  },
  sf: {
    submit: 'Wyślij',
    reset: 'Resetuj',
    search: 'Szukaj',
    edit: 'Zapisz',
    addText: 'Dodaj',
    removeText: 'Usuń',
    checkAllText: 'Zaznacz wszystkie',
    error: {
      'false schema': `Boolean schema is false`,
      $ref: `Can't resolve reference {ref}`,
      additionalItems: `Should not have more than {limit} item`,
      additionalProperties: `Should not have additional properties`,
      anyOf: `Should match some schema in "anyOf"`,
      dependencies: `should have property {deps} when property {property} is present`,
      enum: `Should be equal to one of predefined values`,
      format: `Should match format "{format}"`,
      type: `Should be {type}`,
      required: `Required`,
      maxLength: `Should not be longer than {limit} character`,
      minLength: `Should not be shorter than {limit} character`,
      minimum: `Should be {comparison} {limit}`,
      formatMinimum: `Should be {comparison} {limit}`,
      maximum: `Should be {comparison} {limit}`,
      formatMaximum: `Should be {comparison} {limit}`,
      maxItems: `Should not have more than {limit} item`,
      minItems: `Should not have less than {limit} item`,
      maxProperties: `Should not have more than {limit} property`,
      minProperties: `Should not have less than {limit} property`,
      multipleOf: `Should be a multiple of {multipleOf}`,
      not: `Should not be valid according to schema in "not"`,
      oneOf: `Should match exactly one schema in "oneOf"`,
      pattern: `Should match pattern "{pattern}"`,
      uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
      custom: `Should match format`,
      propertyNames: `Property name "{propertyName}" is invalid`,
      patternRequired: `Should have property matching pattern "{missingPattern}"`,
      switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
      const: `Should be equal to constant`,
      contains: `Should contain a valid item`,
      formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
      if: `Should match "{failingKeyword}" schema`,
    },
  },
  onboarding: {
    skip: `Pominąć`,
    prev: `Poprzedni`,
    next: `Kolejny`,
    done: `Gotowe`,
  },
} as FullLocaleData;
