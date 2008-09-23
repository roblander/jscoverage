/*
    encodings.c - test handling different character encodings
    Copyright (C) 2008 siliconforks.com

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

#include <assert.h>
#include <string.h>

#include "encoding.h"
#include "stream.h"

int main(void) {
  jschar * characters;
  size_t num_characters; 
  int result;

  /* e, e grave, e acute, e circumflex */
  uint8_t utf8[] = {
    'e',
    0xc3,
    0xa8,
    0xc3,
    0xa9,
    0xc3,
    0xaa,
  };

  result = jscoverage_bytes_to_characters("UTF-8", utf8, 7, &characters, &num_characters);

  assert(result == 0);
  assert(num_characters == 4);
  assert(characters[0] == 'e');
  assert(characters[1] == 0xe8);
  assert(characters[2] == 0xe9);
  assert(characters[3] == 0xea);

  free(characters);

  /*
  BOM is 0xfeff
  = 1111 1110 1111 1111
  UTF: 1110xxxx 10xxxxxx 10xxxxxx
     = 11101111 10111011 10111111
     = EF BB BF
  */
  uint8_t utf8_with_bom[] = {
    0xef,
    0xbb,
    0xbf,
    'e',
    0xc3,
    0xa8,
    0xc3,
    0xa9,
    0xc3,
    0xaa,
  };

  result = jscoverage_bytes_to_characters("UTF-8", utf8_with_bom, 10, &characters, &num_characters);

  assert(result == 0);
  assert(num_characters == 4);
  assert(characters[0] == 'e');
  assert(characters[1] == 0xe8);
  assert(characters[2] == 0xe9);
  assert(characters[3] == 0xea);

  free(characters);

  return 0;
}