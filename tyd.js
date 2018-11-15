export default class tyd {
    constructor(opts) {
        this.data = opts.data
        this.yAxisKeyName = opts.yAxisKeyName
    }

    tyd() {
        this.formattedData = []
        this.columnNames = this.data['columns']
        this.rowNames = [... new Set(this.data(map(item => item[this.yAxisKeyName])))];
        let count = 0
        this.data.forEach((row) => {
            let rowName = row[this.yAxisKeyName]
            for (let key in row) {
                let cellValue = row[key]
                // this passes header data,so  your column headers don't get treated as cells
                if (cellValue != yName) {
                    const output = {
                        x: key,
                        y: rowName,
                        value: +cellValue
                    }
                    this.formattedData[count] = output
                    count += 1
                }
            }
        })
        return this.formattedData
    }
}