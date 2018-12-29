
const { BASE_URL } = require('../constants');

/**
 * @enum {BiConnectorReadPreference}
 */
const BI_CONNECTOR_READ_PREFERENCE_ENUM = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

/**
 * Optional if instance is not a global cluster
 * @enum {ClusterType}
 */
const CLUSTER_TYPE_ENUM = {
  REPLICASET: 'REPLICASET',
  SHARDED: 'SHARDED',
  GEOSHARDED: 'GEOSHARDED',
};

/**
 * M2 and M5 clusters are always "TENANT" cluster must be specified as such
 * @enum {ProviderName}
 */
const PROVIDER_NAME_ENUM = {
  AWS: 'AWS',
  GCP: 'GCP',
  AZURE: 'AZURE',
  TENANT: 'TENANT',
};

/**
 * Only valid for "TENANT" type clusters
 * @enum {BackingProviderName}
 */
const BACKING_PROVIDER_NAME_ENUM = {
  AWS: 'AWS',
  GCP: 'GCP',
  AZURE: 'AZURE',
};

/**
 * @enum {AWSRegionName}
 */
const AWS_REGION_NAME_ENUM = {
  US_EAST_1: 'US_EAST_1',
  US_EAST_2: 'US_EAST_2',
  US_WEST_1: 'US_WEST_1',
  US_WEST_2: 'US_WEST_2',
  CA_CENTRAL_1: 'CA_CENTRAL_1',
  EU_WEST_1: 'EU_WEST_1',
  EU_WEST_2: 'EU_WEST_2',
  EU_WEST_3: 'EU_WEST_3',
  EU_CENTRAL_1: 'EU_CENTRAL_1',
  AP_NORTHEAST_1: 'AP_NORTHEAST_1',
  AP_NORTHEAST_2: 'AP_NORTHEAST_2',
  AP_SOUTHEAST_1: 'AP_SOUTHEAST_1',
  AP_SOUTHEAST_2: 'AP_SOUTHEAST_2',
  AP_SOUTH_1: 'AP_SOUTH_1',
  SA_EAST_1: 'SA_EAST_1',
};

/**
 * @enum {GCPRegionName}
 */
const GCP_REGION_NAME_ENUM = {
  EASTERN_US: 'EASTERN_US',
  US_EAST_4: 'US_EAST_4',
  CENTRAL_US: 'CENTRAL_US',
  WESTERN_US: 'WESTERN_US',
  NORTH_AMERICA_NORTHEAST_1: 'NORTH_AMERICA_NORTHEAST_1',
  SOUTH_AMERICA_EAST_1: 'SOUTH_AMERICA_EAST_1',
  WESTERN_EUROPE: 'WESTERN_EUROPE',
  EUROPE_WEST_2: 'EUROPE_WEST_2',
  EUROPE_WEST_3: 'EUROPE_WEST_3',
  EUROPE_WEST_4: 'EUROPE_WEST_4',
  EASTERN_ASIA_PACIFIC: 'EASTERN_ASIA_PACIFIC',
  NORTHEASTERN_ASIA_PACIFIC: 'NORTHEASTERN_ASIA_PACIFIC',
  SOUTHEASTERN_ASIA_PACIFIC: 'SOUTHEASTERN_ASIA_PACIFIC',
  ASIA_SOUTH_1: 'ASIA_SOUTH_1',
  AUSTRALIA_SOUTHEAST_1: 'AUSTRALIA_SOUTHEAST_1',
};

/**
 * @enum {AzureRegionName}
 */
const AZURE_REGION_NAME_ENUM = {
  US_CENTRAL: 'US_CENTRAL',
  US_EAST: 'US_EAST',
  US_EAST_2: 'US_EAST_2',
  US_NORTH_CENTRAL: 'US_NORTH_CENTRAL',
  US_WEST: 'US_WEST',
  US_SOUTH_CENTRAL: 'US_SOUTH_CENTRAL',
  EUROPE_NORTH: 'EUROPE_NORTH',
  EUROPE_WEST: 'EUROPE_WEST',
  FRANCE_CENTRAL: 'FRANCE_CENTRAL',
  US_WEST_2: 'US_WEST_2',
  CANADA_EAST: 'CANADA_EAST',
  CANADA_CENTRAL: 'CANADA_CENTRAL',
  BRAZIL_SOUTH: 'BRAZIL_SOUTH',
  AUSTRALIA_EAST: 'AUSTRALIA_EAST',
  AUSTRALIA_SOUTH_EAST: 'AUSTRALIA_SOUTH_EAST',
  UK_SOUTH: 'UK_SOUTH',
  UK_WEST: 'UK_WEST',
  INDIA_CENTRAL: 'INDIA_CENTRAL',
  INDIA_WEST: 'INDIA_WEST',
  INDIA_SOUTH: 'INDIA_SOUTH',
  ASIA_EAST: 'ASIA_EAST',
  JAPAN_EAST: 'JAPAN_EAST',
  JAPAN_WEST: 'JAPAN_WEST',
  ASIA_SOUTH_EAST: 'ASIA_SOUTH_EAST',
  KOREA_CENTRAL: 'KOREA_CENTRAL',
  KOREA_SOUTH: 'KOREA_SOUTH',
};

/**
 * @enum {AWSInstanceSize}
 */
const AWS_INSTANCE_SIZE_ENUM = {
  M2: 'M2',
  M5: 'M5',
  M10: 'M10',
  M20: 'M20',
  M30: 'M30',
  M40: 'M40',
  R40: 'R40',
  M40_NVME: 'M40_NVME',
  M50: 'M50',
  R50: 'R50',
  M50_NVME: 'M50_NVME',
  M60: 'M60',
  R60: 'R60',
  M60_NVME: 'M60_NVME',
  R80: 'R80',
  M80_NVME: 'M80_NVME',
  M100: 'M100',
  M140: 'M140',
  M200: 'M200',
  R200: 'R200',
  M200_NVME: 'M200_NVME',
  M300: 'M300',
  R400: 'R400',
  M400_NVME: 'M400_NVME',
};

/**
 * @enum {GCPInstanceSize}
 */
const GCP_INSTANCE_SIZE_ENUM = {
  M2: 'M2',
  M5: 'M5',
  M10: 'M10',
  M20: 'M20',
  M30: 'M30',
  M40: 'M40',
  M50: 'M50',
  M60: 'M60',
  M80: 'M80',
  M200: 'M200',
  M300: 'M300',
};

/**
 * @enum {AzureInstanceSize}
 */
const AZURE_INSTANCE_SIZE_ENUM = {
  M2: 'M2',
  M5: 'M5',
  M20: 'M20',
  M30: 'M30',
  M40: 'M40',
  M50: 'M50',
  M60: 'M60',
  M90: 'M90',
};

/**
 * Possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB
 * @enum {DiskIOPS}
 */
const DISK_IOPS_ENUM = {
  STANDARD: 'Standard',
  FAST: 'Fast',
  FASTEST: 'Fastest',
};

function makeCreateCluster() {
  /**
   * Sends a POST request to mongo atlas to create a mongoDB cluster within a specified project.
   * @param {string} groupId Mongo atlas project ID
   * @param {Object} options Configuration for the cluster
   * @param {Object} [options.autoScaling] Contains the diskGBEnabled field which specifies whether to enable or disable disk auto-scaling
   * @param {boolean} [options.autoScaling.diskGBEnabled=true] Specifies whether disk auto-scaling is enabled
   * @param {boolean} [options.backupEnabled=false] Set to true to enable Atlas continuous backups for the cluster
   * @param {Object} [options.biConnector] Specify whether to enable/disable BI Connector for Atlas (only available for M10+ clusters)
   * @param {boolean} options.biConnector.enabled Set to true to enable BI Connector for Atlas
   * @param {BiConnectorReadPreference} [options.biConnector.readPreference="secondary"] Set to "primary" to have BI Connector for Atlas read from the primary
   * @param {ClusterType} options.clusterType Specifies the type of the cluster
   * @param {string} options.name The name of the cluster as it appears in Atlas
   * @param {number} [options.numShards=1] Selects whether the cluster is a replica set or a sharded cluster (if set to 1 cluster is a replica set otherwise it is a sharded cluster)
   * @param {Object} options.providerSettings The configuration for the provisioned servers on which MongoDB runs
   * @param {ProviderName} options.providerSettings.providerName The cloud service provider on which the servers are provisioned
   * @param {BackingProviderName} [options.providerSettings.backingProviderName] The cloud service provider on which the server for a multi-tenant cluster is provisioned
   * @param {AWSRegionName|GCPRegionName|AzureRegionName} options.providerSettings.regionName The physical location of your MongoDB cluster
   * @param {AWSInstanceSize|GCPInstanceSize|AzureInstanceSize} options.providerSettings.instanceSizeName The instance size you select is used for all the data-bearing servers in your cluster
   * @param {DiskIOPS} [options.providerSettings.diskIOPS] The maximum input/output operations per second (IOPS) the system can perform
   * @param {string} [options.providerSettings.diskTypeName] The Azure disk type of the server’s root volume (Azure Only)
   * @param {boolean} [options.providerSettings.encryptEBSVolume=false] If enabled, the Amazon EBS encryption feature encrypts the server’s root volume for both data at rest within the volume and for data moving between the volume and the instance (AWS Only)
   * @param {number} [options.replicationFactor=3] The number of replica set members (ignored if replicationSpec is defined)
   * @param {Object} [options.replicationSpec] The configuration of each region in a multi-region cluster
   * @param {number} [options.diskSizeGB] The size in gigabytes of the server’s root volume (AWS/GCP Only)
   * @return {Object} Parsed JSON response from Mongo Atlas
   */
  async function createCluster(groupId, options) {
    const url = `${BASE_URL}/groups/${groupId}/clusters`;
    const method = 'POST';
    const body = options;
    return await this.request(url, method, body);
  }
  return createCluster;
}

function makeGetCluster() {
  return async function getCluster(groupId, clusterName) {
    const url = `${BASE_URL}/groups/${groupId}/clusters/${clusterName}`;
    const method = 'GET';
    return await this.request(url, method);
  }
}

function makeGetClusters() {
  return async function getClusters(groupId) {
    const url = `${BASE_URL}/groups/${groupId}/clusters`;
    const method = 'GET';
    return await this.request(url, method);
  }
}

function makeModifyCluster() {
  return async function modifyCluster(groupId, clusterName, options) {
    const url = `${BASE_URL}/groups/${groupId}/clusters/${clusterName}`;
    const method = 'PATCH';
    const body = options;
    return await this.request(url, method, body);
  }
}

module.exports = {
  createCluster: makeCreateCluster,
  getCluster: makeGetCluster,
  getClusters: makeGetClusters,
  modifyCluster: makeModifyCluster,
};
