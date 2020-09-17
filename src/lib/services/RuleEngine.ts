import {Catalog, Rule, RuleGroup, RuleResult, RuleTarget} from '../../types';
import {Service} from './Service';

export interface RuleEngine extends Service {
	getTargetPatterns(): Promise<string[]>;

	getCatalog(): Promise<Catalog>;

	/**
	 * @param engineOptions - a mapping of keys to values for engineOptions. not all key/value pairs will apply to all engines.
	 */
	run(ruleGroups: RuleGroup[], rules: Rule[], target: RuleTarget[], engineOptions: Map<string, string>): Promise<RuleResult[]>;

	init(): Promise<void>;

	matchPath(path: string): boolean;
}
