/**
 * Author: SrBurns
 * Date: 2022-26-11
 * Description: Bitwise manipulation defs
 * Rights: All rights reserved to "SrBurns-rep"
*/
#ifndef _BITMAN_H_
#define _BITMAN_H_

#include <stdint.h>

// Write less while still understanding what's going on

typedef int8_t i8;
typedef int16_t i16;
typedef int32_t i32;
typedef int64_t i64;

typedef uint8_t u8;
typedef uint16_t u16;
typedef uint32_t u32;
typedef uint64_t u64;

// useful bit manipulation macros

#define BIT_SET(VAR, BIT)      ((VAR) |= (1 << (BIT)))
#define BIT_CLEAR(VAR, BIT)    ((VAR) &= ~(1 << (BIT)))
#define BIT_FLIP(VAR, BIT)     ((VAR) ^= (1 << (BIT)))
#define BIT_CHECK(VAR, BIT)    (((VAR) & (1 << (BIT))) != 0)

#define MASK_SET(VAR, MASK)    ((VAR) |= (MASK))
#define MASK_CLEAR(VAR, MASK)  ((VAR) &= ~(MASK))
#define MASK_FLIP(VAR, MASK)   ((VAR) ^= (MASK))
#define MASK_CHECK(VAR, MASK)  ((VAR) & (MASK) == (MASK))

#define M(BIT) (1 << BIT)	// mask bit

#define CHECK_BIT_ARR(X,I)    ((X[(I)>>3] & (1<<((I)&7))) !=0)
#define SET_BIT_ARR(X,I)      (X[(I)>>3] |= (1<<((I)&7)))
#define CLEAR_BIT_ARR(X,I)    (X[(I)>>3] &= (1<<((I)&7))^0xFF)

// fast inverter

#define INVERT_8U(U8) {\
  (U8) = (U8 >> 4) | (U8 << 4);\
  (U8) = ((U8 & 0XCC) >> 2) | ((U8 & 0X33) << 2);\
  (U8) = ((U8 & 0XAA) >> 1) | ((U8 & 0X55) << 1);\
}
#define INVERT_16U(U16) {\
  (U16) = ((U16 & 0XFF00) >> 8) | ((U16 & 0X00FF) << 8);\
  (U16) = ((U16 & 0XF0F0) >> 4) | ((U16 & 0X0F0F) << 4);\
  (U16) = ((U16 & 0XCCCC) >> 2) | ((U16 & 0X3333) << 2);\
  (U16) = ((U16 & 0XAAAA) >> 1) | ((U16 & 0X5555) << 1);\
}
#define INVERT_32U(U32) {\
  (U32) = ((U32 & 0XFFFF0000) >> 16) | ((U32 & 0X0000FFFF) << 16);\
  (U32) = ((U32 & 0XFF00FF00) >> 8) | ((U32 & 0X00FF00FF) << 8);\
  (U32) = ((U32 & 0XF0F0F0F0) >> 4) | ((U32 & 0X0F0F0F0F) << 4);\
  (U32) = ((U32 & 0XCCCCCCCC) >> 2) | ((U32 & 0X33333333) << 2);\
  (U32) = ((U32 & 0XAAAAAAAA) >> 1) | ((U32 & 0X55555555) << 1);\
}
#define INVERT_64U(U64) {\
    (U64) = ((uint64_t)(U64) & (uint64_t)0xffffffff00000000) >> 32 |           \
            ((uint64_t)(U64) & (uint64_t)0x00000000ffffffff) << 32;            \
    (U64) = ((uint64_t)(U64) & (uint64_t)0xffff0000ffff0000) >> 16 |           \
            ((uint64_t)(U64) & (uint64_t)0x0000ffff0000ffff) << 16;            \
    (U64) = ((uint64_t)(U64) & (uint64_t)0xff00ff00ff00ff00) >> 8 |            \
            ((uint64_t)(U64) & (uint64_t)0x00ff00ff00ff00ff) << 8;             \
    (U64) = ((uint64_t)(U64) & (uint64_t)0xf0f0f0f0f0f0f0f0) >> 4 |            \
            ((uint64_t)(U64) & (uint64_t)0x0f0f0f0f0f0f0f0f) << 4;             \
    (U64) = ((uint64_t)(U64) & (uint64_t)0xcccccccccccccccc) >> 2 |            \
            ((uint64_t)(U64) & (uint64_t)0x3333333333333333) << 2;             \
    (U64) = ((uint64_t)(U64) & (uint64_t)0xaaaaaaaaaaaaaaaa) >> 1 |            \
            ((uint64_t)(U64) & (uint64_t)0x5555555555555555) << 1;             \
}

#endif /* _BITMAN_H_ */
