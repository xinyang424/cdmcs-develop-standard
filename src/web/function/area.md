---
title: 地址
date: 2023-03-01
category:
  + 常用方法
---

## 获取地址中的省市县区

适用场景：从一段完整的地址文本中筛选出省、市、区（县）

::: details 查看代码
::: code-tabs#shell
@tab:active TS版本

```typescript
// 获取地址中的省市县区
const getGLAddress = (argAddress: string): RegExpMatchArray | null => {
	const reg = /.+?(省|市|自治区|自治州|盟|县|旗|区)/g;
	// 内蒙古自治区 广西壮族自治区 西藏自治区 宁夏回族自治区 新疆维吾尔自治区
	if (argAddress.indexOf("内蒙古") != -1) {
		argAddress = argAddress.replace(/内蒙古/g, "内蒙古自治区");
	} else if (argAddress.indexOf("广西") != -1) {
		argAddress = argAddress.replace(/广西/g, "广西壮族自治区");
	} else if (argAddress.indexOf("西藏") != -1) {
		argAddress = argAddress.replace(/西藏/g, "西藏自治区");
	} else if (argAddress.indexOf("宁夏") != -1) {
		argAddress = argAddress.replace(/宁夏/g, "宁夏回族自治区");
	} else if (argAddress.indexOf("新疆") != -1) {
		argAddress = argAddress.replace(/新疆/g, "新疆维吾尔自治区");
	}
	return argAddress.match(reg);
};

export default getGLAddress;

```

@tab JS版本

```javascript
// 获取地址中的省市县区
const getGLAddress = (argAddress) => {
    const reg = /.+?(省|市|自治区|自治州|盟|县|旗|区)/g;
    // 内蒙古自治区 广西壮族自治区 西藏自治区 宁夏回族自治区 新疆维吾尔自治区
    if (argAddress.indexOf("内蒙古") != -1) {
        argAddress = argAddress.replace(/内蒙古/g, "内蒙古自治区");
    } else if (argAddress.indexOf("广西") != -1) {
        argAddress = argAddress.replace(/广西/g, "广西壮族自治区");
    } else if (argAddress.indexOf("西藏") != -1) {
        argAddress = argAddress.replace(/西藏/g, "西藏自治区");
    } else if (argAddress.indexOf("宁夏") != -1) {
        argAddress = argAddress.replace(/宁夏/g, "宁夏回族自治区");
    } else if (argAddress.indexOf("新疆") != -1) {
        argAddress = argAddress.replace(/新疆/g, "新疆维吾尔自治区");
    }
    return argAddress.match(reg);
};

export default getGLAddress;
```

:::

## Vant从areaList筛选出省

适用场景：选择驾驶证发征地的时候只需要一级区域信息（如四川省、广东省....）。

::: details 查看代码
::: code-tabs#shell
@tab:active TS版本

```typescript
import {
    areaList
} from "@vant/area-data";
type ValueType = {
    text: string;
    value: string;
};
const getProvinceList = () => {
    const provinceList = areaList.province_list;
    const handerProvinceList: Array < ValueType > = [];
    for (const key in provinceList) {
        let temp: ValueType = {
            text: provinceList[key],
            value: key.substring(0, 2),
        };
        handerProvinceList.push(temp);
    }
    return handerProvinceList;
};

export {
    getProvinceList
};

```

@tab JS版本

```javascript
import {
    areaList
} from "@vant/area-data";
const getProvinceList = () => {
    const provinceList = areaList.province_list;
    const handerProvinceList = [];
    for (const key in provinceList) {
        let temp: ValueType = {
            text: provinceList[key],
            value: key.substring(0, 2),
        };
        handerProvinceList.push(temp);
    }
    return handerProvinceList;
};

export {
    getProvinceList
};
```

:::

## Vant根据三级区域码找完整地址

适用场景：后台返回三级区域码（县或者区的区域码），然后根据三级区域码找到对应的省、市、区（县）。

::: details 查看代码
::: code-tabs#shell
@tab:active TS版本

```typescript
import {
    areaList
} from "@vant/area-data";
type ValueType = {
    text: string;
    value: string;
};
const getProvinceList = () => {
    const provinceList = areaList.province_list;
    const handerProvinceList: Array < ValueType > = [];
    for (const key in provinceList) {
        let temp: ValueType = {
            text: provinceList[key],
            value: key.substring(0, 2),
        };
        handerProvinceList.push(temp);
    }
    return handerProvinceList;
};

const getProvinceText = (code: string): string => {
    let provinceText: string = "";
    getProvinceList().forEach(item => {
        if (item.value == code) {
            provinceText = item.text;
        }
    });
    return provinceText;
};

export {
    getProvinceList,
    getProvinceText
};

```

@tab JS版本

```javascript
import {
    areaList
} from "@vant/area-data";
const getProvinceList = () => {
    const provinceList = areaList.province_list;
    const handerProvinceList = [];
    for (const key in provinceList) {
        let temp: ValueType = {
            text: provinceList[key],
            value: key.substring(0, 2),
        };
        handerProvinceList.push(temp);
    }
    return handerProvinceList;
};

const getProvinceText = (code) => {
    let provinceText = "";
    getProvinceList().forEach(item => {
        if (item.value == code) {
            provinceText = item.text;
        }
    });
    return provinceText;
};

export {
    getProvinceList,
    getProvinceText
};
```

:::

## 重庆地址

适用场景：只能选择重庆市内的地址。

::: details 查看代码
::: code-tabs#shell
@tab:active TS版本

```typescript
export const chongQingCity: Array<{ value: string, text: string }> = [
  {
    value: '500101',
    text: '万州区'
  },
  {
    value: '500102',
    text: '涪陵区'
  },
  {
    value: '500103',
    text: '渝中区'
  },
  {
    value: '500104',
    text: '大渡口区'
  },
  {
    value: '500105',
    text: '江北区'
  },
  {
    value: '500106',
    text: '沙坪坝区'
  },
  {
    value: '500107',
    text: '九龙坡区'
  },
  {
    value: '500108',
    text: '南岸区'
  },
  {
    value: '500109',
    text: '北碚区'
  },
  {
    value: '500110',
    text: '綦江区'
  },
  {
    value: '500111',
    text: '大足区'
  },
  {
    value: '500112',
    text: '渝北区'
  },
  {
    value: '500113',
    text: '巴南区'
  },
  {
    value: '500114',
    text: '黔江区'
  },
  {
    value: '500115',
    text: '长寿区'
  },
  {
    value: '500116',
    text: '江津区'
  },
  {
    value: '500117',
    text: '合川区'
  },
  {
    value: '500118',
    text: '永川区'
  },
  {
    value: '500119',
    text: '南川区'
  },
  {
    value: '500120',
    text: '璧山区'
  },
  {
    value: '500151',
    text: '铜梁区'
  },
  {
    value: '500152',
    text: '潼南区'
  },
  {
    value: '500153',
    text: '荣昌区'
  },
  {
    value: '500154',
    text: '开州区'
  },
  {
    value: '500155',
    text: '梁平区'
  },
  {
    value: '500156',
    text: '武隆区'
  },
  {
    value: '500229',
    text: '城口县'
  },
  {
    value: '500230',
    text: '丰都县'
  },
  {
    value: '500231',
    text: '垫江县'
  },
  {
    value: '500233',
    text: '忠县'
  },
  {
    value: '500235',
    text: '云阳县'
  },
  {
    value: '500236',
    text: '奉节县'
  },
  {
    value: '500237',
    text: '巫山县'
  },
  {
    value: '500238',
    text: '巫溪县'
  },
  {
    value: '500240',
    text: '石柱土家族自治县'
  },
  {
    value: '500241',
    text: '秀山土家族苗族自治县'
  },
  {
    value: '500242',
    text: '酉阳土家族苗族自治县'
  },
  {
    value: '500243',
    text: '彭水苗族土家族自治县'
  }
];

```

@tab JS版本

```javascript
export const chongQingCity = [{
        value: '500101',
        text: '万州区'
    },
    {
        value: '500102',
        text: '涪陵区'
    },
    {
        value: '500103',
        text: '渝中区'
    },
    {
        value: '500104',
        text: '大渡口区'
    },
    {
        value: '500105',
        text: '江北区'
    },
    {
        value: '500106',
        text: '沙坪坝区'
    },
    {
        value: '500107',
        text: '九龙坡区'
    },
    {
        value: '500108',
        text: '南岸区'
    },
    {
        value: '500109',
        text: '北碚区'
    },
    {
        value: '500110',
        text: '綦江区'
    },
    {
        value: '500111',
        text: '大足区'
    },
    {
        value: '500112',
        text: '渝北区'
    },
    {
        value: '500113',
        text: '巴南区'
    },
    {
        value: '500114',
        text: '黔江区'
    },
    {
        value: '500115',
        text: '长寿区'
    },
    {
        value: '500116',
        text: '江津区'
    },
    {
        value: '500117',
        text: '合川区'
    },
    {
        value: '500118',
        text: '永川区'
    },
    {
        value: '500119',
        text: '南川区'
    },
    {
        value: '500120',
        text: '璧山区'
    },
    {
        value: '500151',
        text: '铜梁区'
    },
    {
        value: '500152',
        text: '潼南区'
    },
    {
        value: '500153',
        text: '荣昌区'
    },
    {
        value: '500154',
        text: '开州区'
    },
    {
        value: '500155',
        text: '梁平区'
    },
    {
        value: '500156',
        text: '武隆区'
    },
    {
        value: '500229',
        text: '城口县'
    },
    {
        value: '500230',
        text: '丰都县'
    },
    {
        value: '500231',
        text: '垫江县'
    },
    {
        value: '500233',
        text: '忠县'
    },
    {
        value: '500235',
        text: '云阳县'
    },
    {
        value: '500236',
        text: '奉节县'
    },
    {
        value: '500237',
        text: '巫山县'
    },
    {
        value: '500238',
        text: '巫溪县'
    },
    {
        value: '500240',
        text: '石柱土家族自治县'
    },
    {
        value: '500241',
        text: '秀山土家族苗族自治县'
    },
    {
        value: '500242',
        text: '酉阳土家族苗族自治县'
    },
    {
        value: '500243',
        text: '彭水苗族土家族自治县'
    }
];
```

:::
