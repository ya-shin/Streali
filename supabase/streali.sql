create extension if not exists pg_jsonschema;

create table chatthemes (
  id serial primary key,
  title text not null,
  global json not null,
  name json not null,
  message json not null,
  createdBy uuid not null references users(id),

  -- check (
  --   json_matches_schema(
  --     schema :='{
  --        "type": "object",
  --        "properties": {
  --         "global": {
  --          "spaceBetweenMessages": "integer",
  --          "align": "string",
  --          "layout": "string"
  --         }
  --        },
  --        "required": ["global"],
  --        "additionalProperties": false
  --     }',
  --     instance := global
  --   )
  -- ),

  -- check(
  --   json_matches_schema(
  --     schema :='{
  --        "type": "object",
  --        "properties": {
  --         "name": {
  --          "fullWidth": "boolean",
  --          "fontFamily": "string",
  --          "fontSize": "string",
  --          "textAlign": "string",
  --          "textColor": "string",
  --          "backgroundColor": "string",
  --          "borderColor": "string",
  --          "borderWidth": "integer",
  --          "borderRadius": {
  --           "topLeft": "integer",
  --           "topRight": "integer",
  --           "bottomLeft": "integer",
  --           "bottomRight": "integer"
  --          },
  --           "padding": {
  --             "top": "integer",
  --             "right": "integer",
  --             "bottom": "integer",
  --             "left": "integer"
  --           },
  --           "margin": {
  --             "top": "integer",
  --             "right": "integer",
  --             "bottom": "integer",
  --             "left": "integer"
  --           }
  --         }
  --        },
  --        "required": ["name"],
  --        "additionalProperties": false
  --     }',
  --     instance := name
  --   )
  -- ),

  -- check(
  --   json_matches_schema(
  --     schema :='{
  --        "type": "object",
  --        "properties": {
  --         "message": {
  --          "fullWidth": "boolean",
  --          "fontFamily": "string",
  --          "fontSize": "string",
  --          "textAlign": "string",
  --          "textColor": "string",
  --          "backgroundColor": "string",
  --          "borderColor": "string",
  --          "borderWidth": "string",
  --          "borderRadius": {
  --           "topLeft": "integer",
  --           "topRight": "integer",
  --           "bottomLeft": "integer",
  --           "bottomRight": "integer"
  --          },
  --           "padding": {
  --             "top": "integer",
  --             "right": "integer",
  --             "bottom": "integer",
  --             "left": "integer"
  --           },
  --           "margin": {
  --             "top": "integer",
  --             "right": "integer",
  --             "bottom": "integer",
  --             "left": "integer"
  --           }
  --         }
  --        },
  --        "required": ["message"],
  --        "additionalProperties": false
  --     }',
  --     instance := message
  --   )
  -- )
);
