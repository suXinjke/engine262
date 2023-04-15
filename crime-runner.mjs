import {
    Agent,
    setSurroundingAgent,
    ManagedRealm,
    Value,
    CreateDataProperty,
    inspect,
} from './dist/engine262.mjs'
import * as fs from 'fs'

const agent = new Agent()
setSurroundingAgent(agent)
const realm = new ManagedRealm()

realm.scope(() => {
    const print = new Value((args) => {
        console.log(...args.map((tmp) => inspect(tmp)))
        return Value.undefined
    })
    CreateDataProperty(realm.GlobalObject, new Value('print'), print)
})

realm.evaluateScript(fs.readFileSync('./crime.mjs').toString())

