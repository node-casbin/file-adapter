// Copyright 2021 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as fs from 'fs';

// arrayToString gets a printable string for a string array.
function arrayToString(a: string[]): string {
  return a.join(', ');
}

// readFile return a promise for readFile.
function readFile(path: string, encoding?: string): any {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding || 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

// writeFile return a promise for writeFile.
function writeFile(path: string, file: string, encoding?: string): any {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, file, encoding || 'utf8', (error) => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });
}

export { arrayToString, readFile, writeFile };
