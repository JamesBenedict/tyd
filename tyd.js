function tyd(data, yAxisKeyName) {
    const formattedData = []
    let count = 0
    data.forEach((row) => { 
        let rowName = row[yAxisKeyName]
        for (let key in row) {
            let cellValue = row[key]
            if (cellValue != rowName) {
                const output = {
                    x: key,
                    y: rowName,
                    value: cellValue
                }
                formattedData[count] = output
                count += 1
            }
        }
    })
    console.log('tyd', formattedData)
    return formattedData
}
