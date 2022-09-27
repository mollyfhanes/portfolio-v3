import {
    RubyIcon, 
    JavaScriptIcon, 
    ReactIcon, 
    NodeIcon,
    PythonIcon,
    MongoIcon,
    HtmlIcon,
    CssIcon,
    D3Icon,
    ReduxIcon,
    PostgresIcon
} from './icons'

export default function Icon({name, height="50px", width="50px"}) {
    return (
        <div style={{height: height, width: width}}>
            {name === 'ruby' && <RubyIcon />}
            {name === 'js' && <JavaScriptIcon />}
            {name === 'react' && <ReactIcon />}
            {name === 'node' && <NodeIcon />}
            {name === 'python' && <PythonIcon />}
            {name === 'mongo' && <MongoIcon />}
            {name === 'html' && <HtmlIcon />}
            {name === 'css' && <CssIcon />}
            {name === 'd3' && <D3Icon />}
            {name === 'redux' && <ReduxIcon />}
            {name === 'postgres' && <PostgresIcon />}
        </div>
    )
}