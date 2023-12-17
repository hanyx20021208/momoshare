const USER_AGENTS = [
  
    "Mozilla/5.0 (Linux; Android 13; HUAWEI) AppleWebKit/536.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11; OPPO A57) AppleWebKit/500.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/500.36",
    "Mozilla/5.0 (Linux; Android 12; ONEPLUS A5330) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; PAR-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; LYA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; GM1910) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; ULTER PLUS) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/22.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; MI 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12; REDMI K50) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; MI 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12; HUAWEI MATE40) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",  
    "Mozilla/5.0 (Linux; Android 13; VIVO 50) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11; Redmi K30 5G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12; Redmi K60 Pro Premium Edition) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 11; Redmi K40 Pro Premium Edition) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12; M2006J10C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; M2006J10C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; MHA-AL00 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; 16 X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; HUAWEI MATE60) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36", 
    "Mozilla/5.0 (Linux; Android 13; SANTI) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; 16th Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPad; CPU OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPad; CPU OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1",
  ]

  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];
  
  module.exports = {
    USER_AGENT
  }
