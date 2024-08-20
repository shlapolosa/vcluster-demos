import { Entity } from '@backstage/catalog-model';
import { CatalogProcessor, CatalogProcessorEmit } from '@backstage/plugin-catalog-node';

export class ClusterClaimProcessor implements CatalogProcessor {
  getProcessorName(): string {
    return 'ClusterClaimProcessor';
  }

  async validateEntityKind(entity: Entity): Promise<boolean> {
    if (entity.apiVersion.includes('clusterclaim:infra')) {
      console.log('apiVersion:', entity.apiVersion);
      return true;
    }
    return entity.apiVersion === 'devopstoolkitseries.com/v1alpha1' && entity.kind === 'ClusterClaim';
  }

  async postProcessEntity(entity: Entity, _location: any, emit: CatalogProcessorEmit): Promise<Entity> {
    // Handle any specific processing for ClusterClaim
    return entity;
  }
}
