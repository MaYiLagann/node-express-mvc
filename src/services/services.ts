/**
 * List of service symbols that injectable via inversify.
 * See also: https://github.com/inversify/InversifyJS/blob/master/wiki/symbols_as_id.md
 */
export const services = {
  UserService: Symbol.for('IUserService'),
};
