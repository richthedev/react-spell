let id = 0;

export default (prefix = 'id') => `${prefix}${id++}`;