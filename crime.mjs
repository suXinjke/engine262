let a = 9999
let b = a

function corrupt(num) {
    num.value = 47
}

corrupt(a)

print(a)
print(b)