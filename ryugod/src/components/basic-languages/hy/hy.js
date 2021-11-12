/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: ';',
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|for|if|else|interface).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
export var language = {
    defaultToken: 'invalid',
    tokenPostfix: '.hy',
    keywords: [
        '*map',
        '\\a',
        'accumulate',
        'and',
        'ap-compose',
        'ap-dotimes',
        'ap-each-while',
        'ap-each',
        'ap-filter',
        'ap-first',
        'ap-if',
        'ap-last',
        'ap-map-when',
        'ap-map',
        'ap-pipe',
        'ap-reduce',
        'ap-reject',
        'apply',
        'assert',
        'assoc',
        'break',
        'butlast',
        'calling-module-name',
        'car',
        'catch',
        'cdr',
        'chain',
        'coll?',
        'combinations',
        'comp',
        'complement',
        'compress',
        'cond',
        'cons?',
        'cons',
        'constantly',
        'continue',
        'count',
        'cut',
        'cycle',
        'dec',
        'del',
        'dict-comp',
        'disassemble',
        'distinct',
        'do',
        'doto',
        'drop-last',
        'drop-while',
        'drop',
        'Ellipsis',
        'else',
        'empty?',
        'eval-and-compile',
        'eval-when-compile',
        'eval',
        'even?',
        'every?',
        'except',
        'False',
        'filter',
        'finally',
        'first',
        'flatten',
        'float?',
        'fn',
        'for',
        'for*',
        'fraction',
        'genexpr',
        'gensym',
        'get',
        'global',
        'if-not',
        'if',
        'if*',
        'import',
        'in',
        'Inf',
        'instance?',
        'integer-char?',
        'integer?',
        'integer',
        'interleave',
        'interpose',
        'is_not',
        'is-not',
        'is',
        'islice',
        'iterable?',
        'iterate',
        'iterator?',
        'juxt',
        'keyword?',
        'keyword',
        'kwapply',
        'lambda',
        'last',
        'lif-not',
        'lif',
        'list-comp',
        'list*',
        'loop',
        'macroexpand-1',
        'macroexpand',
        'mangle',
        'map',
        'merge-with',
        'multicombinations',
        'name',
        'NaN',
        'neg?',
        'nil',
        'none?',
        'None',
        'nonlocal',
        'not-in',
        'not',
        'NotImplemented',
        'nth',
        'numeric?',
        'odd?',
        'or',
        'partition',
        'permutations',
        'pos?',
        'print',
        'product',
        'progn',
        'quasiquote',
        'quote',
        'raise',
        'range',
        'read-str',
        'read',
        'recur',
        'reduce',
        'remove',
        'repeat',
        'repeatedly',
        'require',
        'rest',
        'return',
        'second',
        'self',
        'set-comp',
        'setv',
        'slice',
        'some',
        'string?',
        'string',
        'symbol?',
        'take-nth',
        'take-while',
        'take',
        'tee',
        'throw',
        'True',
        'try',
        'unless',
        'unmangle',
        'unquote-splice',
        'unquote',
        'when',
        'while',
        'with-gensyms',
        'with',
        'with*',
        'with/a',
        'xi',
        'xor',
        'yield-from',
        'yield',
        'zero?',
        'zip-longest',
        'zip',        
    ],
    builtins: [
        'abs',
        'all',
        'any',
        'bin',
        'bool',
        'callable',
        'chr',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'float',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'hex',
        'id',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'list',
        'locals',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'repr',
        'reversed',
        'round',
        'set',
        'setattr',
        'sorted',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'vars',
        'ascii',
        'bytearray',
        'bytes',
        'exec',
        '--package--',
        '__package__',
        '--import--',
        '__import__',
        '--all--',
        '__all__',
        '--doc--',
        '__doc__',
        '--name--',
        '__name__',
    ],
    typeKeywords: [
        'ArithmeticError',
        'AssertionError',
        'AttributeError',
        'BaseException',
        'DeprecationWarning',
        'EOFError',
        'EnvironmentError',
        'Exception',
        'FloatingPointError',
        'FutureWarning',
        'GeneratorExit',
        'IOError',
        'ImportError',
        'ImportWarning',
        'IndexError',
        'KeyError',
        'KeyboardInterrupt',
        'LookupError',
        'MemoryError',
        'NameError',
        'NotImplementedError',
        'OSError',
        'OverflowError',
        'PendingDeprecationWarning',
        'ReferenceError',
        'RuntimeError',
        'RuntimeWarning',
        'StopIteration',
        'SyntaxError',
        'SyntaxWarning',
        'SystemError',
        'SystemExit',
        'TypeError',
        'UnboundLocalError',
        'UnicodeDecodeError',
        'UnicodeEncodeError',
        'UnicodeError',
        'UnicodeTranslateError',
        'UnicodeWarning',
        'UserWarning',
        'VMSError',
        'ValueError',
        'Warning',
        'WindowsError',
        'ZeroDivisionError',
        'BufferError',
        'BytesWarning',
        'IndentationError',
        'ResourceWarning',
        'TabError',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/#!.*/, 'metatag'],
            [
                /[*\\]?[a-zA-Z_][\w-]*[*?]?/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(;.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};