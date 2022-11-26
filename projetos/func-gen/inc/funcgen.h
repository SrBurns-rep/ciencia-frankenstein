/**
 * Author: SrBurns
 * Date: 2022-26-11
 * Description: funcgen headers
 * Rights: All rights reserved to "SrBurns-rep"
*/

#ifndef __FUNCGEN_H
#define __FUNCGEN_H

#include "bitman.h"
#include <stdbool.h>

#define funcgen(A,T) T funcgen_##A##_##T(char *ops, T *inputs, u32 lenght)

/******************************************************************
 * Algebraic functions                                            *
 ******************************************************************
*/

/**
 * Unsigned types
*/
funcgen(algebraic, u8);
funcgen(algebraic, u16);
funcgen(algebraic, u32);
funcgen(algebraic, u64);

/**
 * Signed types
*/
funcgen(algebraic, i8);
funcgen(algebraic, i16);
funcgen(algebraic, i32);
funcgen(algebraic, i64);

/**
 * Floating point
*/
funcgen(algebraic, float);
funcgen(algebraic, double);

/******************************************************************
 * Logic functions                                                *
 ******************************************************************
*/

/**
 * Common logic
*/
funcgen(logic, bool);

/**
 * Bitwise
*/
funcgen(bitwise, u8);
funcgen(bitwise, u16);
funcgen(bitwise, u32);
funcgen(bitwise, u64);

/******************************************************************
 * Other                                                          *
 ******************************************************************
*/
//TO-DO:
//Arithmetic (potentiation, log, square root, etc...)
//Complex
//Custom (function pointers)
//Flow control

#endif  /* __FUNCGEN_H */