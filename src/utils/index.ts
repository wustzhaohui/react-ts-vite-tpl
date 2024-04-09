import React from 'react';
import REQUEST from './request';
const request = REQUEST;

const deepCopyRoute = <T>(raw: T): T => {
    let copyData: any = Array.isArray(raw) ? [] : {};

    for (const key in raw) {
        const value: any = raw[key];
        // 如果是普通类型或者react元素则不深拷贝
        const condition = typeof value !== 'object' || React.isValidElement(value);
        if (condition) {
            copyData[key] = value;
        } else if (typeof value === 'object') {
            copyData[key] = deepCopyRoute(value);
        }
    }
    return copyData;
};
export { request, deepCopyRoute };
