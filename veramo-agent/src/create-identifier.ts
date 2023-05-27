import { agent } from './veramo/setup.js' // use .js extension when importing local modules

async function main() {
    const aliasIndex = process.argv.indexOf('--alias')
    const _alias = process.argv[aliasIndex + 1]

    if (!_alias) {
        console.log('No alias provided, creating a new identifier without alias')
        const identity = await agent.didManagerCreate()
        console.log(`New identity created`)
        console.log(identity)
    } else {
        console.log('Alias provided: ' + _alias);
        const identity = await agent.didManagerCreate({
            alias: _alias
        })
        console.log(`New identity created`)
        console.log(identity)
    }
}

main().catch(console.log)