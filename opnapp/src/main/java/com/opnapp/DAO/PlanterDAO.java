package com.opnapp.DAO;

import java.util.List;
import com.opnapp.models.Planter;

public interface PlanterDAO {

	public Planter addPlanter(Planter planter);

	public Planter updatePlanter(Planter planter);

	public Planter deletePlanter(Long planterId);

	public Planter viewPlanterById(Long planterId);

	public List<Planter> viewPlanterByShape(String planterShape);

	public List<Planter> viewAllPlanters();

	public List<Planter> viewPlanterByCostRange(double minCost, double maxCost);

}
