export function diInject(injections: { [key: string]: any }): MethodDecorator {
  return function(_, __: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      const original = Object.create(null);
      //save
      Object.keys(injections).forEach((key) => {
        original[key] = this[key];
      });
      applyProp(this, injections);
      originalMethod.apply(this, args);
      //restore
      applyProp(this, original);
    };
    return descriptor;
  };
}

function _delete(obj: any, prop: string) {
  if (obj[prop] && !obj[prop].length) delete obj[prop];
}

function applyProp(obj: any, propMap: { [key: string]: any }) {
  Object.keys(propMap).forEach((key) => {
    _delete(obj, key);
  });
  Object.keys(propMap).forEach((key) => {
    Object.defineProperty(obj, key, {
      get: () => propMap[key],
      enumerable: true,
      configurable: true,
    });
  });
}
