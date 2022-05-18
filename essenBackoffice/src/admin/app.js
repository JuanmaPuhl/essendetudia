export default {
  config: {
    locales: ["es"],
    translations: {
      es: {
        "global.settings": "Ajustes",
        "global.profile": "Perfil",
        "global.content-manager": "Administrador de contenido",
        Name: "Nombre",
        Description: "Descripción",
        "Token type": "Tipo de token",
        "Created at": "Creado",
        "Settings.apiTokens.createPage.title": "Crear token de API",
        "Settings.apiTokens.form.name": "Nombre",
        "Settings.apiTokens.form.description": "Descripción",
        "Settings.apiTokens.form.type": "Tipo de token",
        "global.details": "Detalles",
        "global.save": "Guardar",
        "Settings.roles.form.input.url": "URL",
        "app.utils.delete": "Borrar",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
