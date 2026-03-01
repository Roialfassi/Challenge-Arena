// ═══════════════════════════════════════
// C# CHALLENGE ARENA — SCRIPT
// Educational challenge platform for
// high school C# students
// ═══════════════════════════════════════

// ── DATA ──
const C = [
  // L1
  { id: 1, t: "Sum of Array", l: 1, tags: ["arrays", "loops"], d: "Given an array of integers, return the sum of all its elements. If the array is empty, return 0.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">SumArray</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1, 2, 3, 4]", o: "10" }, { i: "[]", o: "0" }], con: ["Empty array → return 0"], hint: "for loop with accumulator." },
  { id: 2, t: "Count Even Numbers", l: 1, tags: ["arrays", "loops"], d: "Given an array of integers, count how many of them are even (divisible by 2 with no remainder) and return that count.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">CountEvens</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1, 2, 3, 4, 6]", o: "3" }, { i: "[1, 3, 5]", o: "0" }], con: ["Use modulo (%) to check even"], hint: "num % 2 == 0 means even." },
  { id: 3, t: "Find Maximum", l: 1, tags: ["arrays", "loops"], d: "Given an array of integers (at least one element), find and return the largest value. The array may contain negative numbers.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">FindMax</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[3, 7, 2, 9, 1]", o: "9" }, { i: "[-5, -1, -8]", o: "-1" }], con: ["At least 1 element", "Consider negatives"], hint: "Start with first element as max, compare in loop." },
  { id: 4, t: "Find Minimum", l: 1, tags: ["arrays", "loops"], d: "Given an array of integers (at least one element), find and return the smallest value. The array may contain negative numbers.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">FindMin</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[3, 7, 2, 9, 1]", o: "1" }, { i: "[-5, -1, -8]", o: "-8" }], con: ["At least 1 element"], hint: "Same as FindMax but < instead of >." },
  { id: 5, t: "Contains Value", l: 1, tags: ["arrays", "loops"], d: "Given an array of integers and a target value, return true if the target appears anywhere in the array. Return false if not. Do not use built-in search methods.", sig: '<span class="kw">public static</span> <span class="tp">bool</span> <span class="fn">Contains</span>(<span class="tp">int[]</span> nums, <span class="tp">int</span> target)', ex: [{ i: "[4, 8, 15], 15", o: "true" }, { i: "[4, 8, 15], 7", o: "false" }], con: ["No Array.Contains() or LINQ"], hint: "Loop. Found → return true. After loop → false." },
  { id: 6, t: "Count Down Array", l: 1, tags: ["loops", "functions"], d: "Given a positive integer n, create and return an array that counts down from n to 1. For example, if n=5 return [5, 4, 3, 2, 1].", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">CountDown</span>(<span class="tp">int</span> n)', ex: [{ i: "5", o: "[5, 4, 3, 2, 1]" }, { i: "1", o: "[1]" }], con: ["n >= 1"], hint: "Array of size n, loop from n to 1." },
  { id: 7, t: "All Positive", l: 1, tags: ["arrays", "loops"], d: "Given an array of integers, return true only if every element is strictly greater than 0. Note: 0 itself is NOT positive. If the array is empty, return true.", sig: '<span class="kw">public static</span> <span class="tp">bool</span> <span class="fn">AllPositive</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1, 5, 3]", o: "true" }, { i: "[0, 1, 2]", o: "false", c: "0 is not positive" }], con: ["Empty → true"], hint: "Any element <= 0 → false." },
  // L2
  { id: 8, t: "Reverse Array", l: 2, tags: ["arrays", "loops"], d: "Given an array of integers, create and return a NEW array containing the same elements in reverse order. Do not modify the original array and do not use Array.Reverse().", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">ReverseArray</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1, 2, 3]", o: "[3, 2, 1]" }], con: ["No Array.Reverse()"], hint: "Loop from end to fill new array." },
  { id: 9, t: "Multiply All", l: 2, tags: ["arrays", "functions"], d: "Given an array of integers and a multiplier (factor), return a NEW array where each element is multiplied by that factor. The original array should not be changed.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">MultiplyAll</span>(<span class="tp">int[]</span> nums, <span class="tp">int</span> factor)', ex: [{ i: "[1, 2, 3], 3", o: "[3, 6, 9]" }], con: ["Return new array"], hint: "New array, loop and multiply." },
  { id: 10, t: "String Lengths", l: 2, tags: ["arrays", "functions"], d: "Given an array of strings, return a new integer array where each element is the length (number of characters) of the corresponding string.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">GetLengths</span>(<span class="tp">string[]</span> words)', ex: [{ i: '["hi","hello","hey"]', o: "[2, 5, 3]" }], con: ["Use .Length"], hint: "Result array, store .Length in loop." },
  { id: 11, t: "Is Sorted", l: 2, tags: ["arrays", "loops"], d: "Given an array of integers, return true if the elements are in non-decreasing order (each element ≤ the next one). An empty or single-element array is always considered sorted.", sig: '<span class="kw">public static</span> <span class="tp">bool</span> <span class="fn">IsSorted</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1, 2, 3, 4]", o: "true" }, { i: "[1, 3, 2]", o: "false" }], con: ["Empty/single → true"], hint: "Compare each with next." },
  { id: 12, t: "Sum of Digits", l: 2, tags: ["loops", "functions"], d: "Given a non-negative integer, return the sum of its individual digits using a while loop with %10 and /10. Do NOT convert to a string. Example: 123 → 1+2+3 = 6.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">SumDigits</span>(<span class="tp">int</span> n)', ex: [{ i: "123", o: "6", c: "1+2+3" }, { i: "9005", o: "14" }], con: ["While loop with %10 and /10", "No string conversion"], hint: "n%10 = last digit, n/10 = remove it." },
  { id: 13, t: "First Negative Index", l: 2, tags: ["arrays", "loops"], d: "Given an array of integers, find the first element that is negative (< 0) and return its INDEX (position in the array). If no element is negative, return -1. Return the index, not the value.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">FirstNegative</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[3, 7, -2, 5]", o: "2" }, { i: "[1, 2, 3]", o: "-1" }], con: ["Return index, not value"], hint: "Loop with i. If < 0, return i." },
  { id: 14, t: "Double or Nothing", l: 2, tags: ["arrays", "loops", "functions"], d: "Given an array of integers, return a new array where: positive numbers are doubled (×2), negative numbers are replaced with 0, and zeros stay as 0.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">DoubleOrNothing</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[3, -1, 5, -2]", o: "[6, 0, 10, 0]" }], con: ["Zero stays zero"], hint: "if/else: positive → *2, negative → 0." },
  { id: 15, t: "Repeat String", l: 2, tags: ["loops", "functions"], d: "Given a string s and a positive integer n, return a new string that repeats s exactly n times, separated by dashes (-). No dash at the beginning or end.", sig: '<span class="kw">public static</span> <span class="tp">string</span> <span class="fn">RepeatStr</span>(<span class="tp">string</span> s, <span class="tp">int</span> n)', ex: [{ i: '"hi", 3', o: '"hi-hi-hi"' }], con: ["n >= 1", "No trailing dash"], hint: "Add dash before each except first." },
  // L3
  { id: 16, t: "Sum Until -1", l: 3, tags: ["while-loops", "functions"], sc: "A teacher enters grades. -1 to stop.", d: "Given an array, use a while loop to sum all values from the beginning until you encounter -1. Do NOT include -1 in the sum. Stop at the first -1 even if more numbers follow.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">SumUntilStop</span>(<span class="tp">int[]</span> inputs)', ex: [{ i: "[80, 90, 70, -1]", o: "240" }, { i: "[-1]", o: "0" }, { i: "[100, -1, 50]", o: "100", c: "stop at first -1" }], con: ["Stop at first -1", "Use while loop"], hint: "while(inputs[i] != -1) { sum += inputs[i]; i++; }" },
  { id: 17, t: "Count Until Zero", l: 3, tags: ["while-loops", "functions"], sc: "Sensor sends readings. 0 = sensor stopped.", d: "Given an array of integers, use a while loop to count how many values appear before the first 0. Do not count the 0 itself. If the array starts with 0, return 0.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">CountUntilZero</span>(<span class="tp">int[]</span> readings)', ex: [{ i: "[5, 3, 8, 0, 2]", o: "3" }, { i: "[0, 5]", o: "0" }], con: ["Stop at first 0", "Use while loop"], hint: "while(readings[i] != 0) count++." },
  { id: 18, t: "Average Until -1", l: 3, tags: ["while-loops", "functions"], sc: "Enter test scores. -1 to finish and see average.", d: "Given an array, calculate the average (as a double) of all values before the first -1. If -1 is the first value (no numbers before it), return 0.0. Remember to cast to double before dividing.", sig: '<span class="kw">public static</span> <span class="tp">double</span> <span class="fn">AverageUntilStop</span>(<span class="tp">int[]</span> inputs)', ex: [{ i: "[80, 90, 100, -1]", o: "90.0" }, { i: "[-1]", o: "0.0" }], con: ["Return 0.0 if -1 is first", "Cast to double"], hint: "Track sum and count. Divide (check count != 0)." },
  { id: 19, t: "Max Before Stop", l: 3, tags: ["while-loops", "functions"], sc: "Weather station: 999 = stop signal.", d: "Given an array, find the maximum value among all elements that appear before 999. If 999 is the first value (no readings), return -1.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">MaxBeforeStop</span>(<span class="tp">int[]</span> temps)', ex: [{ i: "[22, 35, 18, 40, 999]", o: "40" }, { i: "[999]", o: "-1" }], con: ["Stop at 999", "Return -1 if no readings"], hint: "Track max in while loop." },
  { id: 20, t: "Input Validator", l: 3, tags: ["while-loops", "functions"], sc: "Form asks for 1-10. Keep reading until valid.", d: "Given an array of inputs, skip invalid values (not between 1 and 10 inclusive) until you find the first valid one. Return [firstValidValue, numberOfInvalidAttemptsBefore].", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">ValidateInput</span>(<span class="tp">int[]</span> inputs)', ex: [{ i: "[15, -3, 0, 7, 5]", o: "[7, 3]" }, { i: "[5, 8]", o: "[5, 0]" }], con: ["Valid = 1-10 inclusive", "Use while loop"], hint: "while outside 1-10: increment attempts, advance." },
  // L4
  { id: 21, t: "Two Sum Exists", l: 4, tags: ["arrays", "loops"], d: "Given an array and a target, determine if any TWO elements at different positions add up to the target. You cannot use the same element twice. Return true if such a pair exists.", sig: '<span class="kw">public static</span> <span class="tp">bool</span> <span class="fn">TwoSumExists</span>(<span class="tp">int[]</span> nums, <span class="tp">int</span> target)', ex: [{ i: "[2, 7, 11], 9", o: "true", c: "2+7" }, { i: "[1, 2, 3], 7", o: "false" }], con: ["Nested loops", "Don't pair with itself"], hint: "i loop, j from i+1." },
  { id: 22, t: "Palindrome Check", l: 4, tags: ["loops", "functions"], d: "Given a string, return true if it reads the same forwards and backwards. The check is case-insensitive (e.g. 'Racecar' is a palindrome). Do not use Array.Reverse().", sig: '<span class="kw">public static</span> <span class="tp">bool</span> <span class="fn">IsPalindrome</span>(<span class="tp">string</span> s)', ex: [{ i: '"Racecar"', o: "true" }, { i: '"hello"', o: "false" }], con: ["ToLower first", "No Array.Reverse"], hint: "Compare from both ends inward." },
  { id: 23, t: "Running Total", l: 4, tags: ["arrays", "loops"], d: "Given an array, return a new array where each element at index i equals the sum of all original elements from index 0 through i. Example: [1,2,3,4] → [1, 3, 6, 10].", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">RunningTotal</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1, 2, 3, 4]", o: "[1, 3, 6, 10]" }], con: ["result[i] = sum of 0..i"], hint: "Running sum variable." },
  { id: 24, t: "FizzBuzz Array", l: 4, tags: ["loops", "functions", "arrays"], d: 'Given n, return a string array for numbers 1 to n. If divisible by 15 → "FizzBuzz", by 3 → "Fizz", by 5 → "Buzz", otherwise the number as a string. Check 15 first!', sig: '<span class="kw">public static</span> <span class="tp">string[]</span> <span class="fn">FizzBuzz</span>(<span class="tp">int</span> n)', ex: [{ i: "5", o: '["1","2","Fizz","4","Buzz"]' }], con: ["Check 15 before 3/5", "i from 1 to n"], hint: "Order: 15 first." },
  { id: 25, t: "Remove Duplicates", l: 4, tags: ["arrays", "loops"], d: "Given an array, return a new array with all duplicate values removed. Keep only the first occurrence of each value and maintain the original order. No LINQ or HashSet.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">RemoveDuplicates</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1, 2, 2, 3, 1]", o: "[1, 2, 3]" }], con: ["No LINQ/HashSet"], hint: "For each, check if already in result." },
  { id: 26, t: "Grade Counter Until -1", l: 4, tags: ["while-loops", "functions"], sc: "Teacher enters grades. -1 to stop. Classify A/B/C/F.", d: "Read grades until -1. Classify each: A (90-100), B (80-89), C (70-79), F (below 70). Return [countA, countB, countC, countF].", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">GradeCounter</span>(<span class="tp">int[]</span> inputs)', ex: [{ i: "[95, 82, 55, 73, -1]", o: "[1, 1, 1, 1]" }], con: ["Stop at -1", "While loop + if/else"], hint: "Classify each grade into buckets." },
  // L5
  { id: 27, t: "Playlist Shuffle Check", l: 5, tags: ["arrays", "loops"], sc: "Music app: no same artist twice in a row.", d: "Given an array of artist names, check that no two consecutive (side-by-side) elements are the same string. Return true if valid, false if any artist appears twice in a row.", sig: '<span class="kw">public static</span> <span class="tp">bool</span> <span class="fn">IsGoodShuffle</span>(<span class="tp">string[]</span> artists)', ex: [{ i: '["Drake","Adele","Drake"]', o: "true" }, { i: '["Drake","Drake","Adele"]', o: "false" }], con: ["Case-sensitive", "Single → true"], hint: "Compare each with next." },
  { id: 28, t: "Health Bar Clamp", l: 5, tags: ["arrays", "loops", "functions"], sc: "Game: HP clamped between 0 and maxHP after each event.", d: "Given starting HP, max HP, and an array of changes (positive=heal, negative=damage), apply each change and clamp HP to stay between 0 and maxHP after each step. Return the final HP.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">FinalHealth</span>(<span class="tp">int</span> hp, <span class="tp">int</span> maxHP, <span class="tp">int[]</span> changes)', ex: [{ i: "80, 100, [-30, 20, -90, 15]", o: "15", c: "80→50→70→0→15" }], con: ["Clamp: 0 <= hp <= maxHP after each"], hint: "Math.Max(0, Math.Min(maxHP, hp+change))." },
  { id: 29, t: "Target Closest", l: 5, tags: ["arrays", "loops"], sc: "Darts: find throw closest to bullseye.", d: "Given an array and a target, find and return the element closest to the target (smallest absolute difference). If two values are equally close, return the one appearing first.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">ClosestToTarget</span>(<span class="tp">int[]</span> arr, <span class="tp">int</span> target)', ex: [{ i: "[10, 22, 28, 35], 25", o: "22" }, { i: "[1, 5], 3", o: "1", c: "tie → first" }], con: ["Math.Abs() for distance"], hint: "Track closest value and smallest distance." },
  { id: 30, t: "Habit Streak Counter", l: 5, tags: ["arrays", "loops", "functions"], sc: "Habit tracker: longest consecutive true run.", d: "Given a boolean array of daily completions, find the length of the longest consecutive run of true values. If there are no true values, return 0.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">LongestHabitStreak</span>(<span class="tp">bool[]</span> days)', ex: [{ i: "[true,true,false,true,true,true]", o: "3" }, { i: "[false,false]", o: "0" }], con: ["Empty → 0"], hint: "true → increment, false → reset. Track max." },
  { id: 31, t: "Password Strength", l: 5, tags: ["loops", "functions"], sc: "+1 each for: length>=8, has upper, has lower, has digit, has special (!@#$%&).", d: "Given a password, return a score 0-5. Award +1 for each: length ≥ 8, has uppercase, has lowercase, has digit, has special char (!@#$%&).", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">PasswordStrength</span>(<span class="tp">string</span> pw)', ex: [{ i: '"AB12!@cd"', o: "5" }, { i: '"longpassword"', o: "2" }], con: ["Special: ! @ # $ % &", "Boolean flags"], hint: "Loop chars, set flags. Sum all true + length check." },
  { id: 32, t: "Menu Until Quit", l: 5, tags: ["while-loops", "functions"], sc: "Kiosk: options 1-3, 0=quit. Count selections.", d: "Process selections with a while loop until 0 appears. Count how many times each valid option (1, 2, or 3) was chosen. Ignore other values. Return [count1, count2, count3].", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">MenuCounter</span>(<span class="tp">int[]</span> inputs)', ex: [{ i: "[1, 2, 1, 3, 0]", o: "[2, 1, 1]" }, { i: "[0]", o: "[0, 0, 0]" }], con: ["Ignore invalid (not 1-3)", "Stop at 0"], hint: "While != 0: classify 1/2/3." },
  // L6
  { id: 33, t: "Merge Two Sorted", l: 6, tags: ["arrays", "loops"], d: "Given two arrays already sorted in ascending order, merge them into a single sorted array. Use two index pointers — do NOT use Array.Sort().", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">MergeSorted</span>(<span class="tp">int[]</span> a, <span class="tp">int[]</span> b)', ex: [{ i: "[1,3,5],[2,4,6]", o: "[1,2,3,4,5,6]" }], con: ["Two pointers, no Array.Sort()"], hint: "Compare a[i] vs b[j], pick smaller." },
  { id: 34, t: "Array Intersection", l: 6, tags: ["arrays", "loops"], d: "Given two arrays, return a new array containing only values that appear in BOTH. Each value should appear at most once in the result, even if it appears multiple times in the inputs.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">Intersection</span>(<span class="tp">int[]</span> a, <span class="tp">int[]</span> b)', ex: [{ i: "[1,2,3,4],[3,4,5]", o: "[3, 4]" }], con: ["No duplicates in output"], hint: "For each in a, check b. Track added." },
  { id: 35, t: "Rotate Left", l: 6, tags: ["arrays", "loops"], d: "Given an array and a number k, rotate it k positions left: the first k elements move to the end. Example: [1,2,3,4,5] rotated by 2 → [3,4,5,1,2]. Use modulo if k ≥ array length.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">RotateLeft</span>(<span class="tp">int[]</span> nums, <span class="tp">int</span> k)', ex: [{ i: "[1,2,3,4,5], 2", o: "[3,4,5,1,2]" }], con: ["Handle k >= length with modulo"], hint: "k %= length." },
  { id: 36, t: "Second Largest", l: 6, tags: ["arrays", "loops"], d: "Given an array, find the second largest DISTINCT value. Example: in [10,10,9] the largest is 10, so the second largest is 9. The array has at least 2 distinct values.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">SecondLargest</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[3,1,4,1,5,9]", o: "5" }, { i: "[10,10,9]", o: "9" }], con: ["At least 2 distinct values"], hint: "Track largest and second largest." },
  { id: 37, t: "Race Positions", l: 6, tags: ["arrays", "loops", "functions"], sc: "Assign rank: fastest = 1st.", d: "Given an array of finish times, return an array where result[i] is runner i's rank. The fastest runner (lowest time) gets rank 1. Rank = 1 + count of runners with a faster time.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">AssignPositions</span>(<span class="tp">double[]</span> times)', ex: [{ i: "[12.5, 10.1, 11.3]", o: "[3, 1, 2]" }], con: ["Position = 1 + count of faster"], hint: "For each, count smaller times." },
  { id: 38, t: "Guess the Number", l: 6, tags: ["while-loops", "functions"], sc: "Guessing game: count guesses until correct.", d: "Given an array of guesses and the correct answer, count how many guesses are made until the answer is found (including the correct guess). The answer is guaranteed to be in the array.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">CountGuesses</span>(<span class="tp">int[]</span> guesses, <span class="tp">int</span> answer)', ex: [{ i: "[5, 3, 8, 7], 7", o: "4" }, { i: "[42], 42", o: "1" }], con: ["Answer guaranteed in array", "While loop"], hint: "While guess != answer, advance. Count all." },
  { id: 39, t: "ATM Withdrawal", l: 6, tags: ["while-loops", "functions"], sc: "ATM: process withdrawals. Skip if > balance. -1 = quit.", d: "Given a starting balance and withdrawal requests, process each with a while loop. Subtract only if amount ≤ balance, otherwise skip. Stop at -1. Return the final remaining balance.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">ATMBalance</span>(<span class="tp">int</span> balance, <span class="tp">int[]</span> txns)', ex: [{ i: "1000, [200, 500, 400, -1]", o: "300", c: "400>300 denied" }], con: ["Skip if > balance", "Stop at -1"], hint: "While not -1: if affordable subtract." },
  // L7
  { id: 40, t: "Bubble Sort", l: 7, tags: ["arrays", "loops"], d: "Sort the array in ascending order using Bubble Sort: repeatedly compare adjacent elements and swap if out of order, until fully sorted. Do NOT use Array.Sort().", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">BubbleSort</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[5,3,8,1]", o: "[1,3,5,8]" }], con: ["Nested loop swap"], hint: "Outer passes, inner adjacent compare+swap." },
  { id: 41, t: "Caesar Cipher", l: 7, tags: ["loops", "functions"], d: "Given a string and a shift number, move every letter forward by that many positions in the alphabet. Wrap around (z+1→a). Preserve case. Leave non-letters unchanged. Use modulo for large shifts.", sig: '<span class="kw">public static</span> <span class="tp">string</span> <span class="fn">CaesarCipher</span>(<span class="tp">string</span> text, <span class="tp">int</span> shift)', ex: [{ i: '"abc", 3', o: '"def"' }, { i: '"XYZ", 2', o: '"ZAB"' }], con: ["Wrap z+1=a", "Modulo for large shifts"], hint: "Subtract base, +shift, %26, +base." },
  { id: 42, t: "Run-Length Encoding", l: 7, tags: ["loops", "functions"], d: "Compress a string by replacing each run of consecutive identical characters with the character followed by its count. Example: 'aaabbc' → 'a3b2c1'. Always include the count, even if 1.", sig: '<span class="kw">public static</span> <span class="tp">string</span> <span class="fn">Compress</span>(<span class="tp">string</span> s)', ex: [{ i: '"aaabbc"', o: '"a3b2c1"' }], con: ["Always include count"], hint: "Track char and count. Append on change." },
  { id: 43, t: "Valid Parentheses", l: 7, tags: ["loops", "functions"], d: "Given a string of parentheses, check if they are balanced. Use a counter: +1 for '(', -1 for ')'. If it goes negative at any point or doesn't end at 0, return false. Otherwise true.", sig: '<span class="kw">public static</span> <span class="tp">bool</span> <span class="fn">IsBalanced</span>(<span class="tp">string</span> s)', ex: [{ i: '"(())"', o: "true" }, { i: '"(()"', o: "false" }, { i: '")("', o: "false" }], con: ["Counter, not stack"], hint: "( → inc, ) → dec. Negative → false. End=0." },
  { id: 44, t: "Matrix Row Sums", l: 7, tags: ["arrays", "loops", "functions"], d: "Given a 2D integer array (matrix), return a 1D array where each element is the sum of the corresponding row. Use GetLength(0) for row count and GetLength(1) for column count.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">RowSums</span>(<span class="tp">int[,]</span> matrix)', ex: [{ i: "[[1,2,3],[4,5,6]]", o: "[6, 15]" }], con: ["GetLength(0) for rows, (1) for cols"], hint: "Nested loops: row then col." },
  { id: 45, t: "Collatz Steps", l: 7, tags: ["while-loops", "functions"], sc: "Even → halve. Odd → 3n+1. Count steps to 1.", d: "Given a positive integer n, count how many steps to reach 1: if even, divide by 2; if odd, do 3n+1. Each operation is one step. If n is already 1, return 0.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">CollatzSteps</span>(<span class="tp">int</span> n)', ex: [{ i: "6", o: "8", c: "6→3→10→5→16→8→4→2→1" }, { i: "1", o: "0" }], con: ["n >= 1", "While loop"], hint: "While n!=1: even→/2, odd→3n+1." },
  { id: 46, t: "Shopping Cart Checkout", l: 7, tags: ["while-loops", "functions", "arrays"], sc: "Scan prices. 0 = done. Return total, count, max.", d: "Process prices with a while loop until 0. Calculate the total sum, number of items, and highest price. Return them as [totalSum, itemCount, maxPrice]. Do not include the 0.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">Checkout</span>(<span class="tp">int[]</span> prices)', ex: [{ i: "[25, 10, 50, 30, 0]", o: "[115, 4, 50]" }], con: ["Stop at 0", "Track sum/count/max"], hint: "While price != 0: sum, count, check max." },
  // L8
  { id: 47, t: "Selection Sort", l: 8, tags: ["arrays", "loops"], d: "Sort the array ascending using Selection Sort: for each position, find the smallest value in the remaining unsorted portion and swap it into place. Do NOT use Array.Sort().", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">SelectionSort</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[64,25,12,22,11]", o: "[11,12,22,25,64]" }], con: ["No Array.Sort()"], hint: "For each i, find min index in remaining, swap." },
  { id: 48, t: "Chunk Array", l: 8, tags: ["arrays", "loops", "functions"], d: "Given an array and chunk size k, split it into consecutive groups of k elements. The last chunk may be smaller if the array length isn't evenly divisible. Return as int[][].", sig: '<span class="kw">public static</span> <span class="tp">int[][]</span> <span class="fn">ChunkArray</span>(<span class="tp">int[]</span> nums, <span class="tp">int</span> k)', ex: [{ i: "[1,2,3,4,5], 2", o: "[[1,2],[3,4],[5]]" }], con: ["k >= 1"], hint: "Ceiling division. Step by k." },
  { id: 49, t: "Group by Parity", l: 8, tags: ["arrays", "loops", "functions"], d: "Rearrange the array so all even numbers come first, then all odd numbers. Within each group, keep the original relative order of elements.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">GroupByParity</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[3,2,5,4,1,6]", o: "[2,4,6,3,5,1]" }], con: ["Preserve order within groups"], hint: "Collect evens then odds." },
  { id: 50, t: "Pascal's Triangle Row", l: 8, tags: ["arrays", "loops", "functions"], d: "Given n (0-indexed), return that row of Pascal's Triangle. Row 0 = [1], row 1 = [1,1], row 4 = [1,4,6,4,1]. Each element is the sum of two elements above it.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">PascalRow</span>(<span class="tp">int</span> n)', ex: [{ i: "0", o: "[1]" }, { i: "4", o: "[1,4,6,4,1]" }], con: ["Build row by row"], hint: "new[j] = prev[j-1]+prev[j]." },
  { id: 51, t: "Hot/Cold Guesser", l: 8, tags: ["while-loops", "functions"], sc: "Guess game: track closest guess before hitting answer.", d: "Go through guesses until you find the target. Track which incorrect guess was closest (smallest absolute difference to target). Return [totalGuesses, closestIncorrectGuess].", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">HotCold</span>(<span class="tp">int[]</span> guesses, <span class="tp">int</span> target)', ex: [{ i: "[10, 8, 5, 6, 7], 7", o: "[5, 8]" }], con: ["Target guaranteed in array"], hint: "While != target: check if closer, advance." },
  // L9
  { id: 52, t: "Kadane's Max Subarray", l: 9, tags: ["arrays", "loops"], d: "Find the contiguous subarray (at least one element) with the largest sum and return that sum. The array may include negative numbers. Example: in [-2,1,-3,4,-1,2,1,-5,4], the subarray [4,-1,2,1] has sum 6.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">MaxSubarraySum</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[-2,1,-3,4,-1,2,1,-5,4]", o: "6", c: "[4,-1,2,1]" }], con: ["Handle all-negative"], hint: "currentSum = max(num, currentSum+num)." },
  { id: 53, t: "Matrix Transpose", l: 9, tags: ["arrays", "loops"], d: "Return the transpose of a 2D matrix: swap rows and columns so element [i,j] becomes [j,i]. A 2×3 matrix becomes 3×2.", sig: '<span class="kw">public static</span> <span class="tp">int[,]</span> <span class="fn">Transpose</span>(<span class="tp">int[,]</span> m)', ex: [{ i: "[[1,2,3],[4,5,6]]", o: "[[1,4],[2,5],[3,6]]" }], con: ["result[j,i] = m[i,j]"], hint: "Swap dimensions." },
  { id: 54, t: "Mode of Array", l: 9, tags: ["arrays", "loops", "functions"], d: "Find the value that appears most frequently in the array. If multiple values tie for highest frequency, return the smallest one. No LINQ or Dictionary.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">FindMode</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1,2,2,3,3]", o: "2", c: "tie→smaller" }], con: ["No LINQ/Dictionary"], hint: "Nested loop to count each." },
  { id: 55, t: "Flatten Jagged Array", l: 9, tags: ["arrays", "loops", "functions"], d: "Given a jagged array (int[][]), combine all inner arrays into one flat array in order. Example: [[1,2],[3],[4,5,6]] → [1,2,3,4,5,6]. Some inner arrays may be empty.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">Flatten</span>(<span class="tp">int[][]</span> j)', ex: [{ i: "[[1,2],[3],[4,5,6]]", o: "[1,2,3,4,5,6]" }], con: ["Handle empty inner arrays"], hint: "Count total, then fill." },
  { id: 56, t: "Reverse Digits", l: 9, tags: ["while-loops", "functions"], d: "Reverse the digits of a positive integer using only math (no strings). Use %10 to get the last digit and *10 to build the result. Note: 1000 → 1 (leading zeros disappear).", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">ReverseDigits</span>(<span class="tp">int</span> n)', ex: [{ i: "1234", o: "4321" }, { i: "1000", o: "1" }], con: ["While loop with %10 and *10"], hint: "result = result*10 + n%10; n/=10." },
  // L10
  { id: 57, t: "Spiral Order", l: 10, tags: ["arrays", "loops"], d: "Return all elements of a 2D matrix in clockwise spiral order. Start top-left, go right → down → left → up, spiraling inward. Use four boundary variables (top, bottom, left, right).", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">SpiralOrder</span>(<span class="tp">int[,]</span> m)', ex: [{ i: "[[1,2,3],[4,5,6],[7,8,9]]", o: "[1,2,3,6,9,8,7,4,5]" }], con: ["Four boundary variables"], hint: "Right→down→left→up, shrink." },
  { id: 58, t: "Leader Elements", l: 10, tags: ["arrays", "loops"], d: "An element is a 'leader' if it is strictly greater than every element to its right. The rightmost element is always a leader. Return all leaders in their original order.", sig: '<span class="kw">public static</span> <span class="tp">int[]</span> <span class="fn">FindLeaders</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[16,17,4,3,5,2]", o: "[17,5,2]" }], con: ["Rightmost = always leader"], hint: "Right to left. Track max so far." },
  { id: 59, t: "Longest Increasing Subarray", l: 10, tags: ["arrays", "loops"], d: "Find the longest contiguous subarray where each element is STRICTLY greater than the one before it. Return its length. Example: [1,3,5,4,7,8,9] → the run [4,7,8,9] has length 4.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">LongestIncreasing</span>(<span class="tp">int[]</span> nums)', ex: [{ i: "[1,3,5,4,7,8,9]", o: "4", c: "[4,7,8,9]" }], con: ["Strictly increasing"], hint: "Track current and max length." },
  { id: 60, t: "Digital Root", l: 10, tags: ["while-loops", "functions"], d: "Repeatedly sum the digits of a number until you get a single digit (0-9). Use nested while loops: outer continues while number ≥ 10, inner sums its digits. No string conversion.", sig: '<span class="kw">public static</span> <span class="tp">int</span> <span class="fn">DigitalRoot</span>(<span class="tp">int</span> n)', ex: [{ i: "9875", o: "2", c: "29→11→2" }, { i: "5", o: "5" }], con: ["No strings", "Outer while n>=10, inner sums digits"], hint: "Outer: while(n>=10). Inner: sum digits. Replace n." },
];

const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const LN = {
  1: "Absolute Basics",
  2: "Simple Processing",
  3: "While Loops & Input",
  4: "Intermediate Core",
  5: "Intermediate Creative",
  6: "Intermediate+",
  7: "Advanced",
  8: "Advanced+",
  9: "Expert",
  10: "Master"
};

// Level emojis for practice grid
const LE = { 1: "🌱", 2: "🔧", 3: "🔄", 4: "⚙️", 5: "💡", 6: "🚀", 7: "⚡", 8: "🔥", 9: "🧠", 10: "👑" };

// Topic emoji map
const TE = {
  "all": "🏠",
  "arrays": "📦",
  "loops": "🔁",
  "functions": "⚡",
  "while-loops": "🔄"
};

const TAGS = [...new Set(C.flatMap(c => c.tags))].sort();

// ═══════════════════════════════════════
// LANGUAGE SYSTEM
// ═══════════════════════════════════════
let curLang = localStorage.getItem('ca-lang') || 'en';

function isHe() { return curLang === 'he'; }
function t(key) { return isHe() ? (HE.ui[key] || key) : null; }
function levelName(l) { return isHe() ? HE.levels[l] : LN[l]; }
function tagName(tag) { return isHe() ? (HE.tags[tag] || tag) : tag.replace('-', ' '); }
function chField(c, field) {
  if (!isHe()) return c[field];
  const h = HE.ch[c.id];
  if (!h) return c[field];
  const map = { t: 't', d: 'd', sc: 'sc', hint: 'hint' };
  return h[map[field]] || c[field];
}
function chCon(c) {
  if (!isHe()) return c.con;
  const h = HE.ch[c.id];
  return (h && h.con) ? h.con : c.con;
}

function toggleLang() {
  curLang = isHe() ? 'en' : 'he';
  localStorage.setItem('ca-lang', curLang);
  applyLang();
}

function applyLang() {
  const he = isHe();
  document.documentElement.lang = he ? 'he' : 'en';
  document.documentElement.dir = he ? 'rtl' : 'ltr';

  // Header
  document.getElementById('headerTitle').innerHTML = he
    ? 'זירת האתגרים C<span class="hash">#</span>'
    : 'C<span class="hash">#</span> Challenge Arena';
  document.getElementById('headerSubtitle').textContent = he
    ? HE.ui.subtitle : 'Master C# step by step — 60 challenges across 10 levels';
  document.getElementById('langLabel').textContent = he ? '🇬🇧 English' : '🇮🇱 עברית';
  document.getElementById('libBtnText').textContent = he ? HE.ui.library : 'Library';
  document.getElementById('pracBtnText').textContent = he ? HE.ui.practice : 'Practice';

  // Practice
  document.getElementById('pracTitle').textContent = he ? HE.ui.practiceTitle : 'Practice Mode';
  document.getElementById('pracDesc').textContent = he ? HE.ui.practiceDesc : 'Choose a starting level, then challenge yourself. After each problem you can go harder, stay, or go easier.';
  document.getElementById('easierText').textContent = he ? HE.ui.easier : 'Easier';
  document.getElementById('sameText').textContent = he ? HE.ui.sameLevel : 'Same Level';
  document.getElementById('harderText').textContent = he ? HE.ui.harder : 'Harder';
  document.getElementById('restartText').textContent = he ? HE.ui.restart : 'Restart';
  document.getElementById('emptyText').textContent = he ? HE.ui.emptyState : 'No challenges match your filters. Try broadening your search.';

  // Rebuild dynamic parts
  buildHeaderStats();
  buildSidebar();
  buildList();
  buildPracticeGrid();
  applyF();

  // Re-show practice card if active
  if (pLv !== null && document.getElementById('pracActive').classList.contains('show')) {
    pN--; // pShow increments, so decrement to keep count
    pShow();
  }
}

// ═══════════════════════════════════════
// HEADER STATS
// ═══════════════════════════════════════
function buildHeaderStats() {
  const he = isHe();
  const tagColors = {
    "arrays": "#3b82f6",
    "loops": "#0891b2",
    "functions": "#059669",
    "while-loops": "#d97706"
  };
  let h = '';
  h += `<span class="stat-pill"><span class="sp-num">${C.length}</span> ${he ? HE.ui.nChallenges : 'Challenges'}</span>`;
  h += `<span class="stat-pill"><span class="sp-num">${LEVELS.length}</span> ${he ? 'רמות' : 'Levels'}</span>`;
  TAGS.forEach(t => {
    const n = C.filter(c => c.tags.includes(t)).length;
    const color = tagColors[t] || '#6b7e99';
    h += `<span class="stat-pill"><span class="sp-dot" style="background:${color}"></span>${tagName(t)} <span class="sp-num">${n}</span></span>`;
  });
  document.getElementById('headerStats').innerHTML = h;
}

// ═══════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════
function buildSidebar() {
  const he = isHe();
  let h = '';

  // Search
  h += `<div class="sb-section">
    <div class="sb-label"><span class="label-icon">🔍</span> ${he ? HE.ui.search : 'Search'}</div>
    <div class="sb-search-wrap">
      <span class="sb-search-icon">🔎</span>
      <input class="sb-search" type="text" placeholder="${he ? HE.ui.searchPlaceholder : 'Search challenges...'}" id="sSearch" value="${fQ}">
    </div>
  </div>`;

  // Topics
  h += `<div class="sb-section"><div class="sb-label"><span class="label-icon">📂</span> ${he ? HE.ui.topics : 'Topics'}</div>`;
  h += `<div class="sb-item${fTag === 'all' ? ' active' : ''}" data-tag="all"><span class="topic-icon">${TE['all']}</span>${he ? HE.ui.all : 'All'}<span class="cnt">${C.length}</span></div>`;
  TAGS.forEach(tg => {
    const n = C.filter(c => c.tags.includes(tg)).length;
    const icon = TE[tg] || '📄';
    h += `<div class="sb-item${fTag === tg ? ' active' : ''}" data-tag="${tg}"><span class="topic-icon">${icon}</span>${tagName(tg)}<span class="cnt">${n}</span></div>`;
  });
  h += `</div>`;

  // Levels
  h += `<div class="sb-section"><div class="sb-label"><span class="label-icon">📊</span> ${he ? HE.ui.difficulty : 'Difficulty'}</div>`;
  LEVELS.forEach(l => {
    const n = C.filter(c => c.l === l).length;
    h += `<div class="sb-level${fLv === l ? ' active' : ''}" data-lv="${l}">
      <span class="lnum lnum-${l}">${l}</span>
      <span>${levelName(l)}</span>
      <span class="cnt">${n}</span>
    </div>`;
  });
  h += `</div>`;

  // CTA
  h += `<div class="sb-cta">
    <div class="cta-emoji">💪</div>
    <div class="cta-text"><strong>${he ? HE.ui.proTipTitle : 'Pro Tip'}:</strong> ${he ? HE.ui.proTip : 'Try Practice Mode to test yourself with random challenges!'}</div>
  </div>`;

  document.getElementById('sidebar').innerHTML = h;

  // Event listeners — Topics
  document.querySelectorAll('.sb-item[data-tag]').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.sb-item[data-tag]').forEach(e => e.classList.remove('active'));
      el.classList.add('active');
      fTag = el.dataset.tag;
      applyF();
    });
  });

  // Event listeners — Levels
  document.querySelectorAll('.sb-level[data-lv]').forEach(el => {
    el.addEventListener('click', () => {
      const lv = parseInt(el.dataset.lv);
      if (fLv === lv) {
        fLv = null;
        el.classList.remove('active');
      } else {
        document.querySelectorAll('.sb-level').forEach(e => e.classList.remove('active'));
        el.classList.add('active');
        fLv = lv;
      }
      applyF();
    });
  });

  // Search input
  document.getElementById('sSearch').addEventListener('input', e => {
    fQ = e.target.value.toLowerCase();
    applyF();
  });
}

// ═══════════════════════════════════════
// CHALLENGE LIST
// ═══════════════════════════════════════
function buildList() {
  let h = '';
  LEVELS.forEach(l => {
    C.filter(c => c.l === l).forEach(c => { h += renderCh(c); });
  });
  document.getElementById('challengeList').innerHTML = h;
  document.querySelectorAll('.ch-header').forEach(el => {
    el.addEventListener('click', () => {
      el.parentElement.classList.toggle('open');
    });
  });
}

function renderCh(c) {
  const he = isHe();
  const title = chField(c, 't');
  const desc = chField(c, 'd');
  const scenario = chField(c, 'sc');
  const hint = chField(c, 'hint');
  const cons = chCon(c);
  const showHintText = he ? HE.ui.showHint : '💡 Show Hint';
  const funcSigLabel = he ? HE.ui.funcSig : 'Function Signature';
  const examplesLabel = he ? HE.ui.examples : 'Examples';
  const constraintsLabel = he ? HE.ui.constraints : 'Constraints';
  const lvlLabel = he ? HE.ui.lvl : 'LVL';
  const inputLabel = he ? HE.ui.input : 'Input';
  const outputLabel = he ? HE.ui.output : 'Output';
  const noteLabel = he ? HE.ui.note : 'Note';

  const tagH = c.tags.map(tg => {
    const icon = TE[tg] || '';
    return `<span class="tag tag-${tg}">${icon} ${tagName(tg)}</span>`;
  }).join('');

  const hasC = c.ex.some(e => e.c);
  const exH = `<table class="ex-tbl"><tr><th>${inputLabel}</th><th>${outputLabel}</th>${hasC ? `<th>${noteLabel}</th>` : ''}</tr>` +
    c.ex.map(e => `<tr><td>${e.i}</td><td>${e.o}</td>${hasC ? `<td class="cmt">${e.c || ''}</td>` : ''}</tr>`).join('') + `</table>`;

  const conH = cons.length
    ? `<div class="detail-label">${constraintsLabel}</div><ul class="const-list">${cons.map(x => `<li>${x}</li>`).join('')}</ul>`
    : '';

  const scH = scenario ? `<div class="ch-scenario">${scenario}</div>` : '';

  return `<div class="ch" data-id="${c.id}" data-tags="${c.tags.join(',')}" data-lv="${c.l}">
  <div class="ch-header">
    <div class="ch-lvl" data-l="${c.l}">
      ${c.l}
      <span class="lvl-label">${lvlLabel}</span>
    </div>
    <div class="ch-info">
      <div class="ch-num">#${String(c.id).padStart(2, '0')}</div>
      <div class="ch-title">${title}</div>
      <div class="ch-meta">${tagH}</div>
      <div class="ch-desc-preview">${desc}</div>
    </div>
    <div class="ch-arrow">▾</div>
  </div>
  <div class="ch-body">
    ${scH}
    <div class="ch-fulldesc">${desc}</div>
    <div class="detail-label">${funcSigLabel}</div>
    <div class="sig-code">${c.sig}</div>
    <div class="detail-label">${examplesLabel}</div>
    ${exH}
    ${conH}
    <div class="hint-toggle" onclick="event.stopPropagation();const b=this.nextElementSibling;b.classList.toggle('show');this.textContent=b.classList.contains('show')?'${he ? HE.ui.hideHint : '🙈 Hide Hint'}':'${showHintText}';">${showHintText}</div>
    <div class="hint-content">${hint}</div>
  </div>
</div>`;
}

// ═══════════════════════════════════════
// FILTERS
// ═══════════════════════════════════════
let fTag = 'all', fLv = null, fQ = '';

function applyF() {
  const he = isHe();
  let vis = 0;
  document.querySelectorAll('.ch').forEach(el => {
    const c = C.find(x => x.id === parseInt(el.dataset.id));
    let show = true;
    if (fTag !== 'all' && !c.tags.includes(fTag)) show = false;
    if (fLv && c.l !== fLv) show = false;
    if (fQ) {
      const title = chField(c, 't');
      const desc = chField(c, 'd');
      const sc = chField(c, 'sc') || '';
      const s = (title + ' ' + desc + ' ' + sc + ' ' + c.t + ' ' + c.d + ' ' + c.tags.join(' ')).toLowerCase();
      if (!s.includes(fQ)) show = false;
    }
    el.classList.toggle('hidden', !show);
    if (show) vis++;
  });

  document.getElementById('resultCount').textContent = vis + ' ' + (he ? HE.ui.nChallenges : 'challenges');
  document.getElementById('emptyState').style.display = vis === 0 ? '' : 'none';

  let title = he ? HE.ui.allChallenges : 'All Challenges';
  if (fLv) title = (he ? HE.ui.level + ' ' : 'Level ') + fLv + ': ' + levelName(fLv);
  if (fTag !== 'all') title = tagName(fTag) + (he ? '' : ' Challenges');
  document.getElementById('contentTitle').textContent = title;
}

// ═══════════════════════════════════════
// MODE SWITCH
// ═══════════════════════════════════════
function setMode(m) {
  document.getElementById('modeLib').classList.toggle('active', m === 'library');
  document.getElementById('modePrac').classList.toggle('active', m === 'practice');
  document.getElementById('libraryView').style.display = m === 'library' ? 'flex' : 'none';
  document.getElementById('practiceView').classList.toggle('active', m === 'practice');
}

// ═══════════════════════════════════════
// PRACTICE MODE
// ═══════════════════════════════════════
let pLv = null, pSeen = new Set(), pN = 0;

function buildPracticeGrid() {
  let h = '';
  LEVELS.forEach(l => {
    h += `<div class="level-pick" onclick="pStart(${l})">
      <div class="lp-emoji">${LE[l]}</div>
      <div class="lp-num">${l}</div>
      <div class="lp-name">${levelName(l)}</div>
    </div>`;
  });
  document.getElementById('levelGrid').innerHTML = h;
}

function pStart(l) {
  pLv = l; pSeen.clear(); pN = 0;
  pShow();
}

function pShow() {
  let pool = C.filter(c => c.l === pLv && !pSeen.has(c.id));
  if (!pool.length) {
    C.filter(c => c.l === pLv).forEach(c => pSeen.delete(c.id));
    pool = C.filter(c => c.l === pLv);
  }
  const ch = pool[Math.floor(Math.random() * pool.length)];
  pSeen.add(ch.id);
  pN++;

  document.getElementById('pracStart').style.display = 'none';
  document.getElementById('pracActive').classList.add('show');
  document.getElementById('pracBadge').textContent = `${LE[pLv]} ${isHe() ? HE.ui.level : 'Level'} ${pLv} — ${levelName(pLv)}`;
  document.getElementById('pracCountEl').textContent = `🎯 ${isHe() ? HE.ui.challengeNum : 'Challenge #'}${pN}`;

  // Render full expanded card
  const el = document.createElement('div');
  el.innerHTML = renderCh(ch);
  const card = el.firstElementChild;
  card.classList.add('open');
  document.getElementById('pracCardBody').innerHTML = card.querySelector('.ch-body').innerHTML;

  // Add title
  const titleH = `<div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--ice);">
    <div class="ch-lvl" data-l="${ch.l}" style="width:48px;height:48px;border-radius:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-weight:800;font-size:1.05rem;color:white;">${ch.l}<span style="font-size:0.42rem;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;opacity:0.8;">${isHe() ? HE.ui.lvl : 'LVL'}</span></div>
    <div>
      <div style="font-size:0.65rem;font-family:'JetBrains Mono',monospace;color:var(--slate);font-weight:600;">#${String(ch.id).padStart(2, '0')}</div>
      <div style="font-weight:800;font-size:1.15rem;color:var(--deep);letter-spacing:-0.3px;">${chField(ch, 't')}</div>
      <div class="ch-meta" style="margin-top:0.3rem;">${ch.tags.map(tg => `<span class="tag tag-${tg}">${TE[tg] || ''} ${tagName(tg)}</span>`).join('')}</div>
    </div>
  </div>`;
  document.getElementById('pracCardBody').insertAdjacentHTML('afterbegin', titleH);

  document.getElementById('pbEasier').disabled = pLv <= 1;
  document.getElementById('pbHarder').disabled = pLv >= 10;
}

function pracGo(d) {
  if (d === -1 && pLv > 1) pLv--;
  else if (d === 1 && pLv < 10) pLv++;
  pShow();
}

function pracReset() {
  pLv = null; pSeen.clear(); pN = 0;
  document.getElementById('pracStart').style.display = '';
  document.getElementById('pracActive').classList.remove('show');
}

// ═══════════════════════════════════════
// SCROLL TO TOP
// ═══════════════════════════════════════
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (window.scrollY > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});

// ═══════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════
document.addEventListener('keydown', (e) => {
  // Ctrl + K or / to focus search
  if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
    e.preventDefault();
    const search = document.getElementById('sSearch');
    if (search) search.focus();
  }
  // Escape to clear search
  if (e.key === 'Escape') {
    const search = document.getElementById('sSearch');
    if (search && document.activeElement === search) {
      search.value = '';
      fQ = '';
      applyF();
      search.blur();
    }
  }
});

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
// Apply saved language on load
if (curLang === 'he') {
  document.documentElement.lang = 'he';
  document.documentElement.dir = 'rtl';
}
applyLang();
