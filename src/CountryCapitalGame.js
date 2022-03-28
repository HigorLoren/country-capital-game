import React, { useState, useEffect } from 'react';

export default function CountryCapitalGame({ data }) {
  const [options, setOptions] = useState({});
  const [firstOption, setFirstOption] = useState(undefined);

  const updateOptionsClassname = (keys, classname) =>
    keys.forEach((key) => {
      setOptions((old) => ({ ...old, [key]: classname }));
    });

  const findDesiredOption = () => {
    return data[firstOption] || Object.keys(data).find((country) => data[country] === firstOption);
  };

  const handleClick = (e) => {
    const currOption = e.target.innerText;

    if (currOption === firstOption || e.target.className === 'right') return;

    updateOptionsClassname(Object.keys(options), '');

    if (!firstOption) {
      setFirstOption(currOption);
      updateOptionsClassname([currOption], 'selected');
      return;
    }

    if (currOption === findDesiredOption()) {
      updateOptionsClassname([currOption, firstOption], 'right');
      setTimeout(() => {
        setOptions((old) => {
          const tempButtons = { ...old };
          delete tempButtons[currOption];
          delete tempButtons[firstOption];

          return tempButtons;
        });
      }, 600);
    } else {
      updateOptionsClassname([currOption, firstOption], 'wrong');
    }

    setFirstOption(undefined);
  };

  useEffect(() => {
    const allOptions = [...Object.values(data), ...Object.keys(data)];
    for (let i = allOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }

    const tempOptions = {};
    allOptions.forEach((item) => {
      tempOptions[item] = '';
    });
    setOptions(tempOptions);
  }, [data]);

  return (
    <div className="CountryCapitalGame">
      {Object.keys(options).map((currOption, i) => (
        <button
          key={i}
          type="button"
          className={options[currOption]}
          onClick={handleClick}
          data-text={currOption}
        >
          {currOption}
        </button>
      ))}
      {Object.keys(options).length === 0 ? (
        <h2 className="won">Congratulations 🎉 You won!</h2>
      ) : null}
    </div>
  );
}
