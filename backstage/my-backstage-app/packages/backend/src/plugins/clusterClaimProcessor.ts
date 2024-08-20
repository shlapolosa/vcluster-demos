// import { DiscoveryService, LoggerService } from "@backstage/backend-plugin-api";
// // import { Entity } from "@backstage/catalog-model";
// // import { CatalogProcessor, CatalogProcessorEmit } from "@backstage/plugin-catalog-node";
// // import { LocationSpec } from "@backstage/plugin-catalog-common";

// export interface ClusterClaimProcessorOptions {
//     logger: LoggerService;
//     discovery: DiscoveryService;
// };

// export class ClusterClaimProcessor implements CatalogProcessor {
//     // private logger: LoggerService;
//     // private discovery: DiscoveryService;

//     // constructor({ logger, discovery }: ClusterClaimProcessorOptions) {
//     //     this.logger = logger;
//     //     this.discovery = discovery;
//     // }

//     getProcessorName(): string {
//         return "ClusterClaimProcessor";
//     }

//     // private shouldProcessEntity(entity: Entity): boolean {
//     //     // this.logger.info(`Checking entity with kind: ${entity.kind} and apiVersion: ${entity.apiVersion}`);
//     //     return entity.kind === 'ClusterClaim' && entity.apiVersion === 'devopstoolkitseries.com/v1alpha1';
//     // }

//     // async postProcessEntity(entity: Entity, _location: LocationSpec, emit: CatalogProcessorEmit): Promise<Entity> {
//     //     if (this.shouldProcessEntity(entity)) {
//     //         try {
//     //             // this.logger.info(`Processing ClusterClaim entity: ${entity.metadata.name}`);
//     //             // Example processing logic
//     //             emit(processingResult.annotation({
//     //                 key: 'cluster.claim/id',
//     //                 value: entity.spec.id,
//     //             }));
//     //         } catch (error) {
//     //             // this.logger.error(`Error processing ClusterClaim entity ${entity.metadata.name}: ${error}`);
//     //         }
//     //     }
//     //     return entity;
//     // }
// }
