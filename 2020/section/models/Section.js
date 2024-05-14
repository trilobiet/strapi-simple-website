'use strict';

function slugIt(name) {

    // create a slug out of an input string for Section.
    // Section name is unique so no prefix based on id here.
    // Bolke de Beer -> bolke-de-beer
    var sep = "-";
    var nonAlphaNumerics = new RegExp( /[\W_]+/g );
    var trailingSeps = new RegExp( sep + "+$" );
    return name.toLowerCase().trim()
             .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
             .replace( nonAlphaNumerics, sep )
             .replace( trailingSeps, "" );
}


/**
 * Lifecycle callbacks for the `Section` model.
 */
module.exports = {

  beforeSave: async model => {
    if (model.name) {
      model.slug = slugIt(model.name);
    }
  },

  beforeUpdate: async model => {
    if (model.getUpdate().name) {
      if (!model.getUpdate().slug) {
        model.update({
          // once slug present, do not alter
          slug: slugIt(model.getUpdate().name)
        });
      }
    }
  }

  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, results) => {},

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {},

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, result) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
