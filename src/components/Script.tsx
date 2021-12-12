import {useEffect} from 'react'


// react-helmet don't guarantee the scripts execution order
export default function Script(props: any) {

    // Ruels: alwasy use effect at the top level and from React Functions
    useEffect(() => {
        const script = document.createElement('script')

        // src, async, onload
        Object.assign(script, props)

        let {parent = 'body'} = props

        let parentNode = document.querySelector(parent)
        parentNode.appendChild(script)

        return () => {
            parentNode.removeChild(script)
        }
    })

    return null  // Return null is necessary for the moment.
}
