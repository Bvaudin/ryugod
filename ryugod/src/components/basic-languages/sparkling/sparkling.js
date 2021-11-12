/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['#', '//'],
        blockComment: ["/*", "*/"]
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
    tokenPostfix: '.spn',
    keywords: [
        'and',
        'break',
        'continue',
        'do',
        'else',
        'extern',
        'fn',
        'for',
        'if',
        'let',
        'not',
        'or',
        'return',
        'while',
        'false',
        'nil',
        'true',
    ],
    builtins: [
        'print',
        'dbgprint',
        'fopen',
        'remove',
        'rename',
        'tmpfile',
        'readfile',
        'close',
        'getline',
        'printf',
        'print',
        'read',
        'write',
        'flush',
        'tell',
        'seek',
        'eof',
        'find',
        'startswith',
        'endswith',
        'substr',
        'substrto',
        'substrfrom',
        'split',
        'repeat',
        'isalnum',
        'isalpha',
        'isdigit',
        'isxdigit',
        'ispunct',
        'isspace',
        'isgraph',
        'iscntrl',
        'isprint',
        'islower',
        'isupper',
        'tolower',
        'toupper',
        'format',
        'zipwith',
        'sort',
        'find',
        'pfind',
        'bsearch',
        'any',
        'all',
        'slice',
        'join',
        'foreach',
        'reduce',
        'filter',
        'map',
        'insert',
        'inject',
        'erase',
        'concat',
        'push',
        'pop',
        'last',
        'swap',
        'reverse',
        'foreach',
        'map',
        'filter',
        'keys',
        'values',
        'zip',
        'abs',
        'min',
        'max',
        'range',
        'floor',
        'ceil',
        'round',
        'sgn',
        'hypot',
        'sqrt',
        'cbrt',
        'pow',
        'exp',
        'exp2',
        'exp10',
        'log',
        'log2',
        'log10',
        'sin',
        'cos',
        'tan',
        'sinh',
        'cosh',
        'tanh',
        'asin',
        'acos',
        'atan',
        'atan2',
        'deg2rad',
        'rad2deg',
        'random',
        'seed',
        'isfin',
        'isinf',
        'isnan',
        'isfloat',
        'isint',
        'fact',
        'binom',
        'cplx_add',
        'cplx_sub',
        'cplx_mul',
        'cplx_div',
        'cplx_sin',
        'cplx_cos',
        'cplx_tan',
        'cplx_conj',
        'cplx_abs',
        'can2pol',
        'pol2can',
        'getenv',
        'system',
        'assert',
        'time',
        'clock',
        'sleep',
        'utctime',
        'localtime',
        'fmtdate',
        'difftime',
        'parse',
        'parseexpr',
        'compilestr',
        'exprtofn',
        'compileast',
        'toint',
        'tofloat',
        'tonumber',
        'require',
        'dynld',
        'backtrace',
        'typeof',
        'call',
        'apply',
    ],
    typeKeywords: [        
        'hashmap',
        'math',
        'sysutil',
        'string',
        'array',
        'io',
        'stdin',
        'stdout',
        'stderr',
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
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
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
            [/(#.*$)/, 'comment'],
            [/(\/\/.*$)/, 'comment'],
            [/\/\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
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