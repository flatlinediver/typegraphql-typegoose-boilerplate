import { db } from './database';

export function getSchemaOptions() {
  return {
    existingConnection: db,
    options: {
      runSyncIndexes: true,
    },
    schemaOptions: {
      timestamps: true,
    },
  };
}
