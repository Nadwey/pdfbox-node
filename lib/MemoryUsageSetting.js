const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");

class MemoryUsageSetting extends JavaClass {
    /**
     * Returns maximum size of main-memory in bytes to be used.
     *
     * @returns {BigInt}
     */
    getMaxMainMemoryBytes() {
        return this.javaClass.getMaxMainMemoryBytesSync();
    }

    /**
     * Returns maximum size of main-memory in bytes to be used.
     *
     * @returns {Promise<BigInt>}
     */
    async getMaxMainMemoryBytesAsync() {
        return this.javaClass.getMaxMainMemoryBytes();
    }

    /**
     * Returns maximum size of storage bytes to be used (main-memory in temporary files all together).
     *
     * @returns {BigInt}
     */
    getMaxStorageBytes() {
        return this.javaClass.getMaxStorageBytesSync();
    }

    /**
     * Returns maximum size of storage bytes to be used (main-memory in temporary files all together).
     *
     * @returns {Promise<BigInt>}
     */
    async getMaxStorageBytesAsync() {
        return this.javaClass.getMaxStorageBytes();
    }

    /**
     * Returns a copy of this instance with the maximum memory/storage restriction divided by the provided number of parallel uses.
     *
     * @param {Number} parallelUseCount specifies the number of parallel usages for the setting to be returned
     * @returns {MemoryUsageSetting} a copy from this instance with the maximum memory/storage restrictions adjusted to the multiple usage
     */
    getPartitionedCopy(parallelUseCount) {
        return new MemoryUsageSetting(this.javaClass.getPartitionedCopySync(parallelUseCount));
    }

    /**
     * Returns a copy of this instance with the maximum memory/storage restriction divided by the provided number of parallel uses.
     *
     * @param {Number} parallelUseCount specifies the number of parallel usages for the setting to be returned
     * @returns {Promise<MemoryUsageSetting>} a copy from this instance with the maximum memory/storage restrictions adjusted to the multiple usage
     */
    async getPartitionedCopyAsync(parallelUseCount) {
        return new MemoryUsageSetting(await this.javaClass.getPartitionedCopy(parallelUseCount));
    }

    /**
     * Returns directory to be used for temporary files or null if it was not set.
     *
     * @returns {String}
     */
    getTempDir() {
        return this.javaClass.getTempDirSync().getPathSync();
    }

    /**
     * Returns directory to be used for temporary files or null if it was not set.
     *
     * @returns {Promise<String>}
     */
    async getTempDirAsync() {
        return await (await this.javaClass.getTempDir()).getPath();
    }

    /**
     * Returns true if maximum main memory is restricted to a specific number of bytes.
     *
     * @returns {Boolean}
     */
    isMainMemoryRestricted() {
        return this.javaClass.isMainMemoryRestrictedSync();
    }

    /**
     * Returns true if maximum main memory is restricted to a specific number of bytes.
     *
     * @returns {Promise<Boolean>}
     */
    async isMainMemoryRestrictedAsync() {
        return this.javaClass.isMainMemoryRestricted();
    }

    /**
     * Returns true if maximum amount of storage is restricted to a specific number of bytes.
     *
     * @returns {Boolean}
     */
    isStorageRestricted() {
        return this.javaClass.isStorageRestrictedSync();
    }

    /**
     * Returns true if maximum amount of storage is restricted to a specific number of bytes.
     *
     * @returns {Promise<Boolean>}
     */
    async isStorageRestrictedAsync() {
        return this.javaClass.isStorageRestricted();
    }

    /**
     * Sets directory to be used for temporary files.
     *
     * @param {String} tempDir directory for temporary files
     * @returns {MemoryUsageSetting} this instance
     */
    setTempDir(tempDir) {
        return new MemoryUsageSetting(this.javaClass.setTempDirSync(new javaImports.File(tempDir)));
    }

    /**
     * Sets directory to be used for temporary files.
     *
     * @param {String} tempDir directory for temporary files
     * @returns {Promise<MemoryUsageSetting>} this instance
     */
    async setTempDirAsync(tempDir) {
        return new MemoryUsageSetting(
            await this.javaClass.setTempDir(new javaImports.File(tempDir))
        );
    }

    /**
     * Setups buffering memory usage to only use main-memory (no temporary file) which is not restricted in size.
     *
     * @param {?BigInt} [maxMainMemoryBytes] maximum number of main-memory to be used; -1 for no restriction; 0 will also be interpreted here as no restriction
     * @returns {MemoryUsageSetting}
     */
    static setupMainMemoryOnly(maxMainMemoryBytes) {
        if (typeof maxMainMemoryBytes !== "undefined")
            return new MemoryUsageSetting(
                javaImports.MemoryUsageSetting.setupMainMemoryOnlySync(maxMainMemoryBytes)
            );
        return new MemoryUsageSetting(javaImports.MemoryUsageSetting.setupMainMemoryOnlySync());
    }

    /**
     * Setups buffering memory usage to only use main-memory (no temporary file) which is not restricted in size.
     *
     * @param {?BigInt} [maxMainMemoryBytes] maximum number of main-memory to be used; -1 for no restriction; 0 will also be interpreted here as no restriction
     * @returns {Promise<MemoryUsageSetting>}
     */
    static async setupMainMemoryOnlyAsync(maxMainMemoryBytes) {
        if (typeof maxMainMemoryBytes !== "undefined")
            return new MemoryUsageSetting(
                await javaImports.MemoryUsageSetting.setupMainMemoryOnly(maxMainMemoryBytes)
            );
        return new MemoryUsageSetting(await javaImports.MemoryUsageSetting.setupMainMemoryOnly());
    }

    /**
     * Setups buffering memory usage to use a portion of main-memory and additionally temporary file(s) in case the specified portion is exceeded.
     *
     * @param {BigInt} maxMainMemoryBytes maximum number of main-memory to be used; if -1 this is the same as setupMainMemoryOnly(); if 0 this is the same as setupTempFileOnly()
     * @param {?BigInt} [maxStorageBytes] maximum size the main-memory and temporary file(s) may have all together; 0 or less will be ignored; if it is less than maxMainMemoryBytes we use maxMainMemoryBytes value instead
     * @returns {MemoryUsageSetting}
     */
    static setupMixed(maxMainMemoryBytes, maxStorageBytes) {
        if (typeof maxStorageBytes !== "undefined")
            return new MemoryUsageSetting(
                javaImports.MemoryUsageSetting.setupMixedSync(maxMainMemoryBytes, maxStorageBytes)
            );
        return new MemoryUsageSetting(
            javaImports.MemoryUsageSetting.setupMixedSync(maxMainMemoryBytes)
        );
    }

    /**
     * Setups buffering memory usage to use a portion of main-memory and additionally temporary file(s) in case the specified portion is exceeded.
     *
     * @param {BigInt} maxMainMemoryBytes maximum number of main-memory to be used; if -1 this is the same as setupMainMemoryOnly(); if 0 this is the same as setupTempFileOnly()
     * @param {?BigInt} [maxStorageBytes] maximum size the main-memory and temporary file(s) may have all together; 0 or less will be ignored; if it is less than maxMainMemoryBytes we use maxMainMemoryBytes value instead
     * @returns {Promise<MemoryUsageSetting>}
     */
    static async setupMixedAsync(maxMainMemoryBytes, maxStorageBytes) {
        if (typeof maxStorageBytes !== "undefined")
            return new MemoryUsageSetting(
                await javaImports.MemoryUsageSetting.setupMixed(maxMainMemoryBytes, maxStorageBytes)
            );
        return new MemoryUsageSetting(
            await javaImports.MemoryUsageSetting.setupMixed(maxMainMemoryBytes)
        );
    }

    /**
     * Setups buffering memory usage to only use temporary file(s) (no main-memory) with the specified (or not, because JAVASCRIPT) maximum size.
     *
     * @param {?BigInt} [maxStorageBytes] maximum size the temporary file(s) may have all together; -1 for no restriction; 0 will also be interpreted here as no restriction
     * @returns {MemoryUsageSetting}
     */
    static setupTempFileOnly(maxStorageBytes) {
        if (typeof maxStorageBytes !== "undefined")
            return new MemoryUsageSetting(
                javaImports.MemoryUsageSetting.setupTempFileOnlySync(maxStorageBytes)
            );
        return new MemoryUsageSetting(javaImports.MemoryUsageSetting.setupTempFileOnlySync());
    }

    /**
     * Setups buffering memory usage to only use temporary file(s) (no main-memory) with the specified (or not, because JAVASCRIPT) maximum size.
     *
     * @param {?BigInt} [maxStorageBytes] maximum size the temporary file(s) may have all together; -1 for no restriction; 0 will also be interpreted here as no restriction
     * @returns {Promise<MemoryUsageSetting>}
     */
    static async setupTempFileOnlyAsync(maxStorageBytes) {
        if (typeof maxStorageBytes !== "undefined")
            return new MemoryUsageSetting(
                await javaImports.MemoryUsageSetting.setupTempFileOnly(maxMainMemoryBytes)
            );
        return new MemoryUsageSetting(await javaImports.MemoryUsageSetting.setupTempFileOnly());
    }

    /**
     * Returns true if main-memory is to be used.
     *
     * If this returns false it is ensured useTempFile() returns true.
     *
     * @returns {Boolean}
     */
    useMainMemory() {
        return this.javaClass.useMainMemorySync();
    }

    /**
     * Returns true if main-memory is to be used.
     *
     * If this returns false it is ensured useTempFile() returns true.
     *
     * @returns {Promise<Boolean>}
     */
    async useMainMemoryAsync() {
        return this.javaClass.useMainMemory();
    }

    /**
     * Returns true if temporary file is to be used.
     *
     * If this returns false it is ensured useMainMemory returns true.
     * 
     * @returns {Boolean}
     */
    useTempFile() {
        return this.javaClass.useTempFileSync();
    }

    /**
     * Returns true if temporary file is to be used.
     *
     * If this returns false it is ensured useMainMemory returns true.
     * 
     * @returns {Promise<Boolean>}
     */
    async useTempFileAsync() {
        return this.javaClass.useTempFile();
    }
}

module.exports = MemoryUsageSetting;
