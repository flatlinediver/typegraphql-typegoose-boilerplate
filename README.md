## Install and run

```yarn && yarn start```

## Create .env file

Populate it with DB_CONNECTION_URL

## Queries examples

### getAllLogs

```graphql
{
  getAllLogs {
    _id
    logType {
      _id
    }
  }
}
```

### getAllLogTypes

```graphql
{
  getAllLogTypes {
    _id
    createdAt
    updatedAt
    label
    description
    slug
    tags {
      _id
    }
  }
}
```

### getAllTags

```graphql
{
  getAllTags {
    _id
    createdAt
    updatedAt
    label
    description
		slug
  }
}
```

## Mutation examples

### CreateLog

```graphql
mutation CreateLog($logType: ID!) {
  createLog(logType: $logType) {
    _id
    logType {
      _id
      label
      slug
      description
      tags {
        _id
        label
    		description
				slug
      }
    }
  }
}
```

Query variables:
```json
{
  "logType": "5ffdcd71dc1a606d137f81d1"
}
```

### CreateLogType

```graphql
mutation CreateLogType($label: String!, $description: String, $tags: [TagInput!]!) {
  createLogType(label: $label, description: $description, tags: $tags) {
    _id
    label
		slug
    description
    tags {
      _id,
      label
      description
      slug
    }
  }
}

```

Query variables:
```json
{
  "label": "LogTypeTest",
  "description": "LogType description",
  "tags": [
    {"_id": "5ffdcd47dc1a606d137f81cf"},
    {"_id": "5ffdcd5cdc1a606d137f81d0"}
  ]
}
```

### CreateTag

```graphql
mutation CreateTag($label: String!, $description: String) {
  createTag(label: $label, description: $description) {
    _id
    label
    description
		slug
  }
}
```

Query variables:
```json
{
  "label": "TestTag",
  "description": "This is the tag description"
}
```

