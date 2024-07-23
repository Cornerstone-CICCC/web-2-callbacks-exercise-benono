const fs = require("fs")

fs.readFile("./firstname.txt", "utf-8", (err, firstname) => {
  process.stdout.write(firstname)
  fs.readFile("./lastname.txt", "utf-8", (err, lastname) => {
    process.stdout.write(` ${lastname}`)
    fs.readFile("./age.txt", "utf-8", (err, age) => {
      process.stdout.write(` is ${age} years old`)
    })
    fs.readFile("./hobbies.txt", "utf-8", (err, content) => {
      const hobby = JSON.parse(content)
      process.stdout.write(` and his hobbies are ${hobby[0]} and ${hobby[1]}\n`)
    })
  })
})
