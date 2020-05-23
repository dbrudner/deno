function className (objName) {
  return objName
    .replace(/_([a-z])/g, g => g[1].toUpperCase())
    .replace(/^\w/, g => g.toUpperCase())
}

function camelize (name) {
  return name.replace(/(_\w)/g, m => m[1].toUpperCase())
}

function snakeify (name) {
  return name.split(/(?=[A-Z])/).join('_').toLowerCase()
}

function classify (name) {
  name = camelize(name)
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const strictModeVar = Deno.env.RECURLY_STRICT_MODE;
const STRICT_MODE = strictModeVar && strictModeVar.toUpperCase() === 'TRUE';

export {
  STRICT_MODE,
  className,
  camelize,
  snakeify,
  classify
}
