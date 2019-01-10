export function diInject(injections: { [key: string]: any }): MethodDecorator {
  return function(_, __, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      return originalMethod.apply({ ...this, ...injections }, args);
    };
    return descriptor;
  };
}
