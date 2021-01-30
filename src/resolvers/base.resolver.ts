import { ClassType, Query, Resolver } from 'type-graphql';

export function createBaseResolver<T, Y extends ClassType>(suffix: string, objectTypeCls: T, Service: Y) {
    @Resolver({ isAbstract: true })
    abstract class BaseResolver {

        constructor(public service = new Service()) {}
  
        @Query(_returns => [objectTypeCls], { name: `getAll${suffix}` })
        async getAll() {
            return this.service.getAll();
        }
    }
  
    return BaseResolver;
};