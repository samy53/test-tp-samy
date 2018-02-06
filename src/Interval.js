Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return this.start <= interval.start && this.end >= interval.end;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	if(!this.overlaps(interval))
	{
		return new Interval(null,null);
	}
	if(this.start <= interval.start)
	{
		if(this.end >= interval.end)
		{
			return new Interval(this.start, this.end);
		}else
		{
			return new Interval(this.start, interval.end);
		}
	}else
	{
		if(this.end >= interval.end)
		{
			return new Interval(interval.start, this.end);
		}else
		{
			return new Interval(interval.start, interval.end);
		}
	}
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
if(!this.overlaps(interval))
	{
		return null;
	}
	if(this.start <= interval.start)
	{
		if(this.end >= interval.end)
		{
			return new Interval(interval.start, interval.end);
		}else
		{
			return new Interval(interval.start, this.end);
		}
	}else
	{
		if(this.end >= interval.end)
		{
			return new Interval(this.start, interval.end);
		}else
		{
			return new Interval(this.start, this.end);
		}
	}
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {

};



