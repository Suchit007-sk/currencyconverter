import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded text-sm d-flex ${className}`}>
            <div className="w-50">
                <label htmlFor={amountInputId} className="text-muted mb-2 d-inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="form-control border-0 p-0 bg-transparent"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-50 d-flex flex-wrap justify-content-end text-end">
                <p className="text-muted mb-2 w-100">Currency Type</p>
                <select
                    className="form-select form-select-sm bg-light cursor-pointer"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;