// postcss-dvw-to-vw.js
// version: 1.0.0
export default (option={}) => {

    // Set default
    option.width = option.width ?? 750
    option.unit = option.unit ?? "dvw"

    // Convert
    return {
        postcssPlugin: 'postcss-dvw-to-vw',
        prepare (result) {
            return {
                Declaration (node) {
                    const match =node.value.match(eval('/\\d+(\\.\\d+)?'+option.unit+'/g'))
                    if(match) {
                        for(let i = 0; i < match.length; i++) {
                            node.value = node.value.replace(
                                match[i],
                                (match[i].replace(option.unit, "")*100/option.width)+"vw"
                            );
                        }
                    }
                },
            }
        }
    }
};