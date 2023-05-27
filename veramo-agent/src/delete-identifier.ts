import { agent } from './veramo/setup.js' // use .js extension when importing local modules

async function main() {
    const aliasIndex = process.argv.indexOf('--alias');
    const _alias = process.argv[aliasIndex + 1];

    if (!_alias) {
        console.log('Please provide an alias for the new identifier');
        return;
    } else {
        console.log('Alias provided: ' + _alias);
        const aliceIdentifiers = await agent.didManagerFind({
            alias: _alias,
        })
        console.log(`Identifiers found with alias ${_alias} are ${aliceIdentifiers.length}`)
        aliceIdentifiers.forEach(async (id) => {
            console.log('Deleting identifier: ' + id.did);
            const deleted = await agent.didManagerDelete({
                did: id.did
            });
            if(deleted){
                console.log('Deleted identifier: ' + id.did);
            }
        });
    }
}

main().catch(console.log)