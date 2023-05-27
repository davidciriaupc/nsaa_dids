import { agent } from './veramo/setup.js' // use .js extension when importing local modules

async function main() {
    const identifiers = await agent.didManagerFind()
    console.log(`Identifiers found ${identifiers.length}`)
    
    identifiers.forEach(async (id) => {
        console.log('Deleting identifier: ' + id.did);
        const deleted = await agent.didManagerDelete({
            did: id.did
        });
        if (deleted) {
            console.log('Deleted identifier: ' + id.did);
        }
    });
}

main().catch(console.log)