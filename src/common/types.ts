export type SwaggerMethodDoc<T> = {
  [K in keyof T]: (summary: string) => MethodDecorator;
};

export interface ArrayValue {
  name: string;
  value: string;
}
