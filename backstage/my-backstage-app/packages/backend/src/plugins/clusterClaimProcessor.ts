import {
  CatalogProcessor,
  CatalogProcessorEmit,
  CatalogProcessorParser,
  CatalogProcessorResult,
  processingResult,
} from '@backstage/plugin-catalog-backend';
import { Entity } from '@backstage/catalog-model';

export class ClusterClaimProcessor implements CatalogProcessor {
  getProcessorName(): string {
    return 'ClusterClaimProcessor';
  }

  async validateEntityKind(entity: Entity): Promise<boolean> {
    return entity.kind.toLowerCase() === 'clusterclaim';
  }

  async readLocation(
    location: { type: string; target: string },
    optional: boolean,
    emit: CatalogProcessorEmit,
    parser: CatalogProcessorParser,
  ): Promise<boolean> {
    if (location.type !== 'url') {
      return false;
    }

    const data = await parser({ type: 'url', target: location.target });
    if (data.kind.toLowerCase() === 'clusterclaim') {
      emit(processingResult.entity(location, data));
      return true;
    }

    return false;
  }
}
