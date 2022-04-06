// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "events",
  types: schemaTypes.concat([
    {
      title: "event",
      name: "event",
      type: "document",
      fields: [
        {
          title: "Tittel",
          name: "title",
          type: "string",
        },
        {
          title: "Dato",
          name: "date",
          type: "datetime",
        },
        {
          title: "Beskrivelse",
          name: "description",
          type: "string",
        },
        {
          title: "Link",
          name: "link",
          type: "url",
        },
      ],
    },
  ]),
});
