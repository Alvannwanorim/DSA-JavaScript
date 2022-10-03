function canConstruct(target, wordBank) {}

console.log(canConstruct('abcdef', [ 'ab', 'abc', 'cd', 'def', 'abcd' ]));

console.log(canConstruct('skateboard', [ 'bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar' ]));
console.log(
	canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [ 'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee' ])
);
