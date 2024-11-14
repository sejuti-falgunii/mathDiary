# Introduction to Shell Script - 2

## String

```bash
# One word string
one_str=Hello

# Multi word string concat
str1="Hola"
str2="$str1 world"

# String length
echo "Length of $str2 is ${#str2}"

# Indexing
echo "First character of $str2 is -> ${str2:0:1}"
echo "Second character of $str2 is -> ${str2:1:1}"


# Substring
echo "Substring of $str2 is -> ${str2:5:5}"

# Replace
echo "Replace 'world' with 'amigo' -> ${str2/world/amigo}"

# Uppercase
echo "Uppercase of $str2 is -> ${str2^^}"

# Lowercase
echo "Lowercase of $str2 is -> ${str2,,}"

# Compare
if [ "$str1" = "$one_str" ]; then
    echo "Strings are equal"
elif [ "$str1" != "$one_str" ]; then\
    echo "Strings are not equal"
fi


# check non empty
if [ -n "$str1" ]; then
    echo "String is not empty"
else
    echo "String is empty"
fi

# check empty
if [ -z "$str1" ]; then
    echo "String is empty"
else
    echo "String is not empty"
fi

```

## Array

```bash
# array
arr=("apple" "banana" "cherry")
echo "First element of array is -> ${arr[0]}"
echo "Second element of array is -> ${arr[1]}"

# number array
num_arr=(1 2 3 4 5)
echo "First element of number array is -> ${num_arr[0]}"
echo "Second element of number array is -> ${num_arr[1]}"

# array length
echo "Length of array is -> ${#arr[@]}"
echo "Length of number array is -> ${#num_arr[@]}"

# array slice
echo "Slice of array is -> ${arr[@]:1:2}"
echo "Slice of number array is -> ${num_arr[@]:1:2}"

# array concat
arr2=("dog" "elephant")
arr3=("${arr[@]}" "${arr2[@]}")
echo "Concatenated array is -> ${arr3[@]}"

# iterate
for i in "${arr[@]}"; do
    echo "Element of array is -> $i"
done
```

## Argument & Until Loop

```bash
# arg count
echo "Number of arguments passed is -> $#"

# until loop 
x=$1
until [ $x -le 0 ]; do
    echo "Value of x is -> $x"
    x=$((x-1))
done
```

## Function
```bash
# function 
function test(){
    echo "test"
}

# call function
test

# Parameterized function
function test_param(){
    echo "test_param $1"
}

# call function with parameter
test_param $1

# return value from function
function test_return(){
    return 10
}

# call function with return value
test_return
x=$?
echo "Return value from function is -> $x"
```
