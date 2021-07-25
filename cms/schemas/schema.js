// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  
  // We name our schema
  name: 'events',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // This is the display name for the type
      title: "event",
      
      // The identifier for this document type used in the api's
      name: "event",
      
      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",
      
      // Now we proceed to list the fields of our document
      fields: [
        {
          // The display name for this field
          title: "Title",

          // The identifier for this field used in the api's
          name: "title",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Date",

          // The identifier for this field used in the api's
          name: "date",

          // The type of this field
          type: "date",
        },
        {
          // The display name for this field
          title: "Description",

          // The identifier for this field used in the api's
          name: "description",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Link",

          // The identifier for this field used in the api's
          name: "link",

          // The type of this field
          type: "url",
        },
        {
          // The display name for this field
          title: "Image",

          // The identifier for this field used in the api's
          name: "image",

          // The type of this field
          type: "image",
        },
      ]
    }
  ])
})