export interface BaseRule<T> {
  errorMessage: () => string;
  validate: (value?: T) => boolean;
}
