// postcss-dvw-to-vw.js
// version: 1.0.0
export default (width=750) => {
    return {
        postcssPlugin: 'postcss-dvw-to-vw',
        prepare (result) {
            return {
                Declaration (node) {
                    const match =node.value.match(/\d+(\.\d+)?dvw/g)
                    if(match) {
                        for(let i = 0; i < match.length; i++) {
                            node.value = node.value.replace(
                                match[i],
                                (match[i].replace("dvw", "")*100/width)+"vw"
                            );
                        }
                    }
                },
            }
        }
    }
};